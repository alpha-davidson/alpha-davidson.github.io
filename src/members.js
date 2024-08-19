import membersData from './membersData.js';
import { createResearchNetwork } from './researchNetwork.js';

function populateCurrentMembers() {
    const facultyList = document.getElementById('faculty-list');
    const studentsList = document.getElementById('students-list');
  
    membersData.currentMembers.faculty.forEach(member => {
      const li = document.createElement('li');
      li.textContent = member;
      facultyList.appendChild(li);
    });
  
    membersData.currentMembers.students.forEach(member => {
      const li = document.createElement('li');
      li.textContent = member;
      studentsList.appendChild(li);
    });
  }
  
function populateAlumni() {
    const semesterTabs = document.getElementById('semester-tabs');
    const semesterContent = document.getElementById('semester-content');

    // Add "All Semesters" option
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

    const ul = document.createElement('ul');
    Object.values(membersData.alumni).flat().forEach(member => {
        const li = document.createElement('li');
        li.textContent = member;
        ul.appendChild(li);
    });

    semesterContent.appendChild(ul);

    // Update active tab
    document.querySelectorAll('.semester-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.textContent === 'All Semesters') tab.classList.add('active');
    });
}
  
function showSemester(semester) {
    const semesterContent = document.getElementById('semester-content');
    semesterContent.innerHTML = '';

    const ul = document.createElement('ul');
    membersData.alumni[semester].forEach(member => {
        const li = document.createElement('li');
        li.textContent = member;
        ul.appendChild(li);
    });

    semesterContent.appendChild(ul);

    // Update active tab
    document.querySelectorAll('.semester-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.textContent === semester) tab.classList.add('active');
    });
}


function createNet() {
    createResearchNetwork();
}


document.addEventListener('DOMContentLoaded', () => {
    populateCurrentMembers();
    populateAlumni();
    createNet();
});