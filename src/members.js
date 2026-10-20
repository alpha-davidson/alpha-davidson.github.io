import membersData from './membersData.js?v=members-20261020';
import {
  buildPublicationNetworkData,
  cleanMemberName,
  createResearchNetwork,
  getPublicationData
} from './researchNetwork.js?v=members-20261020';

const publications = getPublicationData();
const publicationData = buildPublicationNetworkData(publications);

function populateCurrentMembers() {
  const facultyList = document.getElementById('faculty-list');
  const studentsList = document.getElementById('students-list');

  membersData.currentMembers.faculty.forEach((name) => {
    facultyList.appendChild(createMemberRow({ name: cleanMemberName(name), affiliation: '' }, 'Co-PI'));
  });

  membersData.currentMembers.students.forEach((name) => {
    studentsList.appendChild(createMemberRow({ name: cleanMemberName(name), affiliation: getAffiliation(name) }, ''));
  });

  // Hide the Students heading in semesters with no current students.
  if (membersData.currentMembers.students.length === 0) {
    studentsList.closest('.member-category').hidden = true;
  }
}

const SEASONS = ['Spring', 'Summer', 'Fall'];

function parseSemester(semester) {
  const [season, year] = semester.split(' ');
  return { season, year: Number(year) };
}

function getAffiliation(name) {
  const match = name.match(/\(([^)]*)\)/);
  return match ? match[1] : '';
}

function lastNameKey(name) {
  const parts = name.split(' ');
  return `${parts[parts.length - 1]} ${name}`;
}

// One entry per past member, with every semester they were in ALPhA.
function buildPastMembers() {
  const people = new Map();

  Object.entries(membersData.alumni).forEach(([semester, names]) => {
    names.forEach((name) => {
      const displayName = cleanMemberName(name);
      if (!people.has(displayName)) {
        people.set(displayName, { name: displayName, affiliation: '', semesters: [] });
      }
      const person = people.get(displayName);
      person.affiliation = person.affiliation || getAffiliation(name);
      person.semesters.push(parseSemester(semester));
    });
  });

  return [...people.values()].sort((a, b) =>
    lastNameKey(a.name).localeCompare(lastNameKey(b.name))
  );
}

function formatYears(semesters) {
  const years = semesters.map((s) => s.year);
  const first = Math.min(...years);
  const last = Math.max(...years);
  return first === last ? `${first}` : `${first}–${last}`;
}

function formatTerms(semesters, year) {
  return SEASONS.filter((season) =>
    semesters.some((s) => s.year === year && s.season === season)
  ).join(' · ');
}

function createMemberRow(person, detail) {
  const li = document.createElement('li');
  li.className = 'past-member';

  const linkedInUrl = membersData.memberLinks[person.name];
  const nameElement = document.createElement(linkedInUrl ? 'a' : 'span');
  nameElement.className = 'past-member-name';
  nameElement.textContent = person.name;
  if (linkedInUrl) {
    nameElement.href = linkedInUrl;
    nameElement.target = '_blank';
    nameElement.rel = 'noopener';
    nameElement.title = `${person.name} on LinkedIn`;
  }
  li.appendChild(nameElement);

  const publicationCount = publicationData.memberStats.get(person.name)?.publicationCount || 0;
  if (publicationCount) {
    const badge = document.createElement('span');
    badge.className = 'publication-count';
    badge.title = `${publicationCount} publication${publicationCount === 1 ? '' : 's'} in site bibliography`;
    badge.textContent = publicationCount;
    li.appendChild(badge);
  }

  const meta = document.createElement('span');
  meta.className = 'past-member-meta';
  meta.textContent = [detail, person.affiliation].filter(Boolean).join(' · ');
  li.appendChild(meta);

  return li;
}

function populateAlumni() {
  const pastMembers = buildPastMembers();
  const years = [...new Set(pastMembers.flatMap((p) => p.semesters.map((s) => s.year)))]
    .sort((a, b) => b - a);

  const yearFilter = document.getElementById('semester-tabs');
  ['All years', ...years].forEach((label) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = label;
    button.classList.add('semester-tab');
    button.addEventListener('click', () => showPastMembers(pastMembers, label));
    yearFilter.appendChild(button);
  });

  showPastMembers(pastMembers, 'All years');
}

function showPastMembers(pastMembers, filter) {
  const year = filter === 'All years' ? null : Number(filter);
  const shown = year
    ? pastMembers.filter((p) => p.semesters.some((s) => s.year === year))
    : pastMembers;

  const content = document.getElementById('semester-content');
  content.innerHTML = '';

  const summary = document.createElement('p');
  summary.className = 'past-members-summary';
  summary.textContent = year
    ? `${shown.length} members in ${year}`
    : `${shown.length} past members since ${Math.min(...pastMembers.flatMap((p) => p.semesters.map((s) => s.year)))}`;
  content.appendChild(summary);

  const list = document.createElement('ul');
  list.className = 'past-members-list';
  shown.forEach((person) => {
    const detail = year ? formatTerms(person.semesters, year) : formatYears(person.semesters);
    list.appendChild(createMemberRow(person, detail));
  });
  content.appendChild(list);

  document.querySelectorAll('.semester-tab').forEach((tab) => {
    tab.classList.toggle('active', tab.textContent === String(filter));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  populateCurrentMembers();
  populateAlumni();
  createResearchNetwork(publications);
});
