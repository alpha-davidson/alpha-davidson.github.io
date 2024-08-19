import * as d3 from 'https://cdn.jsdelivr.net/npm/d3@7/+esm';
import membersData from './membersData.js';

export function createResearchNetwork() {
    const container = document.getElementById('network-visualization');
    const width = container.clientWidth;
    const height = container.clientHeight || window.innerHeight * 0.8;
  
    const svg = d3.select('#network-visualization')
      .append('svg')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('preserveAspectRatio', 'xMidYMid meet');
  
    const nodes = Object.keys(membersData.researchTopics).map(name => ({ id: name, group: membersData.researchTopics[name][0] }));
    const links = [];
  
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const student1 = nodes[i].id;
        const student2 = nodes[j].id;
        const sharedTopics = membersData.researchTopics[student1].filter(topic => 
          membersData.researchTopics[student2].includes(topic)
        );
        
        if (sharedTopics.length > 0) {
          links.push({
            source: student1,
            target: student2,
            value: sharedTopics.length
          });
        }
      }
    }
  
    const color = d3.scaleOrdinal(d3.schemeCategory10);
  
    const simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id(d => d.id).distance(100))
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', d3.forceCenter(width / 2, height / 2));
  
    const link = svg.append('g')
      .selectAll('line')
      .data(links)
      .enter().append('line')
      .attr('stroke', '#999')
      .attr('stroke-opacity', 0.6)
      .attr('stroke-width', d => Math.sqrt(d.value));
  
    const node = svg.append('g')
      .selectAll('g')
      .data(nodes)
      .enter().append('g')
      .call(d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended));
  
    node.append('circle')
      .attr('r', 5)
      .attr('fill', d => color(d.group));
  
    node.append('text')
      .attr('dx', 12)
      .attr('dy', '.35em')
      .text(d => d.id)
      .style('font-size', '10px');
  
    const topics = [...new Set(nodes.map(d => d.group))];
    const legend = svg.append('g')
      .attr('transform', 'translate(10, 10)')
      .selectAll('g')
      .data(topics)
      .enter().append('g')
      .attr('transform', (d, i) => `translate(0, ${i * 20})`);
  
    legend.append('rect')
      .attr('width', 18)
      .attr('height', 18)
      .style('fill', color);
  
    legend.append('text')
      .attr('x', 24)
      .attr('y', 9)
      .attr('dy', '.35em')
      .text(d => d)
      .style('font-size', '10px');
  
    simulation
      .nodes(nodes)
      .on('tick', ticked);
  
    simulation.force('link')
      .links(links);
  
    function ticked() {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);
  
      node
        .attr('transform', d => `translate(${d.x},${d.y})`);
    }
  
    function dragstarted(event) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }
  
    function dragged(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }
  
    function dragended(event) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }
  
    function resize() {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight || window.innerHeight * 0.8;
      svg.attr('viewBox', `0 0 ${newWidth} ${newHeight}`);
      simulation.force('center', d3.forceCenter(newWidth / 2, newHeight / 2));
      simulation.alpha(1).restart();
    }
  
    window.addEventListener('resize', resize);
  }