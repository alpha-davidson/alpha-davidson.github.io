import membersData from './membersData.js';
import { createResearchNetwork } from './researchNetwork.js';

function createMemberCard(name) {
 const li = document.createElement("li");
  li.classList.add("member-card");

  const linkedInUrl = membersData.memberLinks[name];
  const topics = membersData.researchTopics[name] || [];

  const nameElement = linkedInUrl
    ? `<a href="${linkedInUrl}" target="_blank">${name}</a>`
    : `<span>${name}</span>`;

  const topicsHTML = topics.length
    ? `<div class="topics">${topics.map(tag => `<span class="tag">${tag}</span>`).join(' ')}</div>`
    : '';

  li.innerHTML = `
    <div class="member-info">
      ${nameElement}
      ${topicsHTML}
    </div>
  `;

  return li;
}

function populateCurrentMembers() {
    const facultyList = document.getElementById('faculty-list');
    const studentsList = document.getElementById('students-list');

membersData.currentMembers.faculty.forEach(name => {
  const li = createMemberCard(name);
  facultyList.appendChild(li);
});

membersData.currentMembers.students.forEach(name => {
  const li = createMemberCard(name);
  studentsList.appendChild(li);
});
}

function populateAlumni() {
    const semesterTabs = document.getElementById('semester-tabs');
    const semesterContent = document.getElementById('semester-content');

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

    Object.values(membersData.alumni).flat().forEach(name => {
        const card = createMemberCard(name);
        container.appendChild(card);
    });

    semesterContent.appendChild(container);

    document.querySelectorAll('.semester-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.textContent === 'All Semesters') tab.classList.add('active');
    });
}

function showSemester(semester) {
    const semesterContent = document.getElementById('semester-content');
    semesterContent.innerHTML = '';

    const container = document.createElement('div');
    container.className = 'member-grid';

    membersData.alumni[semester].forEach(name => {
        const card = createMemberCard(name);
        container.appendChild(card);
    });

    semesterContent.appendChild(container);

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
// import membersData from './membersData.js';
// import { createResearchNetwork } from './researchNetwork.js';

// function populateCurrentMembers() {
//     const facultyList = document.getElementById('faculty-list');
//     const studentsList = document.getElementById('students-list');
  
//     membersData.currentMembers.faculty.forEach(member => {
//       const li = document.createElement('li');
//       const linkedInUrl = membersData.memberLinks[member];
//     if (linkedInUrl) {
//         li.innerHTML = `<a href="${linkedInUrl}" target="_blank">${member}</a>`;
//       } else {
//         li.textContent = member;
//       }
//       facultyList.appendChild(li);
//     });
  
// membersData.currentMembers.students.forEach(name => {
//   const li = document.createElement("li");
//   const linkedInUrl = membersData.memberLinks[name];

//   if (linkedInUrl) {
//     li.innerHTML = `<a href="${linkedInUrl}" target="_blank">${name}</a>`;
//   } else {
//     li.textContent = name;
//   }

//   studentsList.appendChild(li);
// });
//   }
  
// function populateAlumni() {
//     const semesterTabs = document.getElementById('semester-tabs');
//     const semesterContent = document.getElementById('semester-content');

//     // Add "All Semesters" option
//     const allButton = document.createElement('button');
//     allButton.textContent = 'All Semesters';
//     allButton.classList.add('semester-tab', 'active');
//     allButton.addEventListener('click', () => showAllSemesters());
//     semesterTabs.appendChild(allButton);

//     Object.keys(membersData.alumni).forEach((semester) => {
//         const button = document.createElement('button');
//         button.textContent = semester;
//         button.classList.add('semester-tab');
//         button.addEventListener('click', () => showSemester(semester));
//         semesterTabs.appendChild(button);
//     });

//     showAllSemesters();
//     }

//     function showAllSemesters() {
//     const semesterContent = document.getElementById('semester-content');
//     semesterContent.innerHTML = '';

//     const ul = document.createElement('ul');

//     Object.values(membersData.alumni).flat().forEach(name => {
//       const li = document.createElement("li");
//       const linkedInUrl = membersData.memberLinks[name];

//       if (linkedInUrl) {
//         li.innerHTML = `<a href="${linkedInUrl}" target="_blank">${name}</a>`;
//       } else {
//         li.textContent = name;
//       }
//       ul.appendChild(li);
//     });
//     // Object.values(membersData.alumni).flat().forEach(member => {
//     //     const li = document.createElement('li');
//     //     li.textContent = member;
//     //     ul.appendChild(li);
//     // });
//     semesterContent.appendChild(ul);

//     // Update active tab
//     document.querySelectorAll('.semester-tab').forEach(tab => {
//         tab.classList.remove('active');
//         if (tab.textContent === 'All Semesters') tab.classList.add('active');
//     });
// }
  
// function showSemester(semester) {
//     const semesterContent = document.getElementById('semester-content');
//     semesterContent.innerHTML = '';

//     const ul = document.createElement('ul');
//     // membersData.alumni[semester].forEach(member => {
//     //     const li = document.createElement('li');
//     //     li.textContent = member;
//     //     ul.appendChild(li);
//     // });
//     membersData.alumni[semester].forEach(name => {
//       const li = document.createElement("li");
//       const linkedInUrl = membersData.memberLinks[name];

//       if (linkedInUrl) {
//         li.innerHTML = `<a href="${linkedInUrl}" target="_blank">${name}</a>`;
//       } else {
//         li.textContent = name;
//       }
//       ul.appendChild(li);
//     });

//     semesterContent.appendChild(ul);

//     // Update active tab
//     document.querySelectorAll('.semester-tab').forEach(tab => {
//         tab.classList.remove('active');
//         if (tab.textContent === semester) tab.classList.add('active');
//     });
// }


// function createNet() {
//     createResearchNetwork();
// }


// document.addEventListener('DOMContentLoaded', () => {
//     populateCurrentMembers();
//     populateAlumni();
//     createNet();
// });
