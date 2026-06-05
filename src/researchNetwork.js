import * as d3 from 'https://cdn.jsdelivr.net/npm/d3@7/+esm';
import membersData from './membersData.js';

export function cleanMemberName(name) {
  return name.replace(/\s*\([^)]*\)\s*/g, '').trim();
}

function normalizeName(name) {
  return cleanMemberName(name)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\*/g, '')
    .replace(/[^a-z0-9]+/gi, ' ')
    .trim()
    .toLowerCase();
}

function getAllMemberNames() {
  const current = [
    ...membersData.currentMembers.faculty,
    ...membersData.currentMembers.students
  ];
  const alumni = Object.values(membersData.alumni)
    .flat()
    .map(cleanMemberName);

  return [...new Set([...current, ...alumni])];
}

function getMemberRole(name) {
  if (membersData.currentMembers.faculty.includes(name)) return 'Faculty';
  if (membersData.currentMembers.students.includes(name)) return 'Current student';
  return 'Alumni';
}

function buildAliasIndex(memberNames) {
  const aliasIndex = new Map();

  memberNames.forEach((memberName) => {
    const aliases = [
      memberName,
      ...(membersData.memberAliases[memberName] || [])
    ];

    aliases.forEach((alias) => {
      aliasIndex.set(normalizeName(alias), memberName);
    });
  });

  return aliasIndex;
}

function splitAuthors(authors) {
  if (!authors) return [];

  return authors
    .replace(/,\s+and\s+/gi, ', ')
    .replace(/\s+and\s+/gi, ', ')
    .split(',')
    .map(author => author.trim())
    .filter(Boolean);
}

function matchPublicationMembers(publication, aliasIndex) {
  const matchedMembers = new Set();

  splitAuthors(publication.authors).forEach((author) => {
    const matchedName = aliasIndex.get(normalizeName(author));
    if (matchedName) matchedMembers.add(matchedName);
  });

  return [...matchedMembers];
}

export function getPublicationData() {
  const dataElement = document.getElementById('publications-data');
  if (!dataElement) return [];

  try {
    return JSON.parse(dataElement.textContent);
  } catch (error) {
    console.error('Unable to parse publications data for members page.', error);
    return [];
  }
}

export function buildPublicationNetworkData(publications = []) {
  const memberNames = getAllMemberNames();
  const aliasIndex = buildAliasIndex(memberNames);
  const memberStats = new Map(
    memberNames.map(name => [
      name,
      {
        name,
        role: getMemberRole(name),
        publicationCount: 0,
        publications: []
      }
    ])
  );
  const pairMap = new Map();
  const publicationMatches = [];

  publications.forEach((publication) => {
    const matchedMembers = matchPublicationMembers(publication, aliasIndex);
    publicationMatches.push({ publication, members: matchedMembers });

    matchedMembers.forEach((memberName) => {
      const stats = memberStats.get(memberName);
      stats.publicationCount += 1;
      stats.publications.push(publication);
    });

    for (let i = 0; i < matchedMembers.length; i += 1) {
      for (let j = i + 1; j < matchedMembers.length; j += 1) {
        const pair = [matchedMembers[i], matchedMembers[j]].sort();
        const key = pair.join('::');

        if (!pairMap.has(key)) {
          pairMap.set(key, {
            source: pair[0],
            target: pair[1],
            value: 0,
            publications: []
          });
        }

        const link = pairMap.get(key);
        link.value += 1;
        link.publications.push(publication);
      }
    }
  });

  const nodes = [...memberStats.values()]
    .filter(member => member.publicationCount > 0)
    .map(member => ({
      id: member.name,
      role: member.role,
      publicationCount: member.publicationCount,
      publications: member.publications
    }));
  const nodeIds = new Set(nodes.map(node => node.id));
  const links = [...pairMap.values()]
    .filter(link => nodeIds.has(link.source) && nodeIds.has(link.target));

  return {
    nodes,
    links,
    memberStats,
    publicationMatches
  };
}

function publicationListText(publications) {
  return publications
    .map(publication => `- ${publication.title} (${publication.year || 'n.d.'})`)
    .join('\n');
}

function renderNetworkSummary(container, data) {
  const matchedPublications = data.publicationMatches
    .filter(match => match.members.length > 0)
    .length;
  const summary = document.createElement('p');
  summary.className = 'network-summary';
  summary.textContent = `${data.nodes.length} members matched across ${matchedPublications} publications. Lines connect members who share a publication.`;
  container.appendChild(summary);
}

export function createResearchNetwork(publications = getPublicationData()) {
  const container = document.getElementById('network-visualization');
  if (!container) return;

  const data = buildPublicationNetworkData(publications);
  container.innerHTML = '';
  renderNetworkSummary(container, data);

  if (!data.nodes.length) {
    const emptyState = document.createElement('p');
    emptyState.className = 'network-empty';
    emptyState.textContent = 'No member names matched the publication author list yet.';
    container.appendChild(emptyState);
    return;
  }

  const width = container.clientWidth || 900;
  const height = Math.max((container.clientHeight || 680) - 48, 420);
  const color = d3.scaleOrdinal()
    .domain(['Faculty', 'Current student', 'Alumni'])
    .range(['#7a0a1f', '#2f7d7e', '#767676']);

  const svg = d3.select(container)
    .append('svg')
    .attr('width', '100%')
    .attr('height', height)
    .attr('viewBox', `0 0 ${width} ${height}`)
    .attr('preserveAspectRatio', 'xMidYMid meet');

  const link = svg.append('g')
    .attr('class', 'network-links')
    .selectAll('line')
    .data(data.links)
    .enter()
    .append('line')
    .attr('stroke-width', d => 1 + Math.sqrt(d.value) * 1.7);

  link.append('title')
    .text(d => `${d.source} + ${d.target}\n${d.value} shared publication${d.value === 1 ? '' : 's'}\n${publicationListText(d.publications)}`);

  const node = svg.append('g')
    .attr('class', 'network-nodes')
    .selectAll('g')
    .data(data.nodes)
    .enter()
    .append('g')
    .call(d3.drag()
      .on('start', dragStarted)
      .on('drag', dragged)
      .on('end', dragEnded));

  node.append('circle')
    .attr('r', d => 7 + Math.min(d.publicationCount, 8))
    .attr('fill', d => color(d.role));

  node.append('title')
    .text(d => `${d.id}\n${d.publicationCount} publication${d.publicationCount === 1 ? '' : 's'}\n${publicationListText(d.publications)}`);

  node.append('text')
    .attr('x', 13)
    .attr('y', 4)
    .text(d => d.id);

  const legend = svg.append('g')
    .attr('class', 'network-legend')
    .attr('transform', 'translate(16, 18)')
    .selectAll('g')
    .data(color.domain())
    .enter()
    .append('g')
    .attr('transform', (_d, index) => `translate(0, ${index * 24})`);

  legend.append('circle')
    .attr('r', 6)
    .attr('fill', d => color(d));

  legend.append('text')
    .attr('x', 14)
    .attr('y', 4)
    .text(d => d);

  const simulation = d3.forceSimulation(data.nodes)
    .force('link', d3.forceLink(data.links).id(d => d.id).distance(d => 170 - Math.min(d.value, 4) * 14))
    .force('charge', d3.forceManyBody().strength(-720))
    .force('collide', d3.forceCollide().radius(d => 38 + d.id.length * 1.9 + Math.min(d.publicationCount, 8)))
    .force('center', d3.forceCenter(width / 2, height / 2 + 16));

  simulation.on('tick', () => {
    link
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y);

    node.attr('transform', (d) => {
      d.x = Math.max(36, Math.min(width - 190, d.x));
      d.y = Math.max(58, Math.min(height - 42, d.y));
      return `translate(${d.x}, ${d.y})`;
    });
  });

  function dragStarted(event) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    event.subject.fx = event.subject.x;
    event.subject.fy = event.subject.y;
  }

  function dragged(event) {
    event.subject.fx = event.x;
    event.subject.fy = event.y;
  }

  function dragEnded(event) {
    if (!event.active) simulation.alphaTarget(0);
    event.subject.fx = null;
    event.subject.fy = null;
  }
}
