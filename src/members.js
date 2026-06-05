import membersData from './membersData.js';
import {
  buildPublicationNetworkData,
  cleanMemberName,
  createResearchNetwork,
  getPublicationData
} from './researchNetwork.js';

const publications = getPublicationData();
const publicationData = buildPublicationNetworkData(publications);

function createMemberCard(name) {
  const displayName = cleanMemberName(name);
  const li = document.createElement('li');
  li.classList.add('member-card');

  const linkedInUrl = membersData.memberLinks[displayName];
  const stats = publicationData.memberStats.get(displayName);
  const publicationCount = stats?.publicationCount || 0;
  const publicationLabel = `${publicationCount} publication${publicationCount === 1 ? '' : 's'} in site bibliography`;

  const nameElement = linkedInUrl
    ? `<a href="${linkedInUrl}" target="_blank" rel="noopener">${name}</a>`
    : `<span>${name}</span>`;
  const publicationBadge = publicationCount
    ? `<span class="publication-count" title="${publicationLabel}">${publicationCount}</span>`
    : '';

  li.innerHTML = `
    <div class="member-info">
      ${nameElement}
      ${publicationBadge}
    </div>
  `;

  return li;
}

function populateCurrentMembers() {
  const facultyList = document.getElementById('faculty-list');
  const studentsList = document.getElementById('students-list');

  membersData.currentMembers.faculty.forEach((name) => {
    facultyList.appendChild(createMemberCard(name));
  });

  membersData.currentMembers.students.forEach((name) => {
    studentsList.appendChild(createMemberCard(name));
  });
}

function populateAlumni() {
  const semesterTabs = document.getElementById('semester-tabs');
  const allButton = document.createElement('button');
  allButton.textContent = 'All Semesters';
  allButton.classList.add('semester-tab', 'active');
  allButton.addEventListener('click', () => showAllSemesters());
  semesterTabs.appendChild(allButton);

  Object.keys(membersData.alumni).forEach((semester) => {
    const button = document.createElement('button');
    button.textContent = semester;
    button.classList.add('semester-tab');
    button.addEventListener('click', () => showSemester(semester));
    semesterTabs.appendChild(button);
  });

  showAllSemesters();
}

function showAllSemesters() {
  const semesterContent = document.getElementById('semester-content');
  semesterContent.innerHTML = '';

  const container = document.createElement('div');
  container.className = 'member-grid';
  const seen = new Set();

  Object.values(membersData.alumni).flat().forEach((name) => {
    const displayName = cleanMemberName(name);
    if (seen.has(displayName)) return;

    seen.add(displayName);
    container.appendChild(createMemberCard(name));
  });

  semesterContent.appendChild(container);
  updateActiveTab('All Semesters');
}

function showSemester(semester) {
  const semesterContent = document.getElementById('semester-content');
  semesterContent.innerHTML = '';

  const container = document.createElement('div');
  container.className = 'member-grid';

  membersData.alumni[semester].forEach((name) => {
    container.appendChild(createMemberCard(name));
  });

  semesterContent.appendChild(container);
  updateActiveTab(semester);
}

function updateActiveTab(activeLabel) {
  document.querySelectorAll('.semester-tab').forEach((tab) => {
    tab.classList.toggle('active', tab.textContent === activeLabel);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  populateCurrentMembers();
  populateAlumni();
  createResearchNetwork(publications);
});
