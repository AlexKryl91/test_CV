import '../css/style.css';

import Photo from '/img/photo_sample.png';

import Pencil from '/img/pencil.svg';

import Education from './components/education/education';
import Experience from './components/experience/experience';
import Header from './components/header/header';
import Interests from './components/interests/interests';
import Introduction from './components/introduction/introduction';
import Languages from './components/languages/languages';
import Links from './components/links/links';
import Tools from './components/tools/tools';

import initialData from './initialData';

import createRipple from './UI/rippleEffect';

let appBody = `
    ${Header()}
    <main class="main">
      <h1 class="visually-hidden">UX/UI Desinger CV Webpage</h1>
      <div class="top-block">
        <img class="photo" src="${Photo}" alt="My Photo" />
        ${Introduction(initialData.introduction, Pencil)}
        ${Languages(initialData.languages, Pencil)}
      </div>
      <div class="middle-block">
        ${Experience(initialData.experience, Pencil)}
        ${Tools(initialData.tools, Pencil)}
      </div>
      <div class="bottom-block">
        ${Education(initialData.education, Pencil)}
        <div class="wrapper">
        ${Interests(initialData.interests, Pencil)}
        ${Links(initialData.links, Pencil)}
        </div>
      </div>
    </main>
`;

if (localStorage.getItem('_cvData')) {
  appBody = JSON.parse(localStorage.getItem('_cvData'));
}

const Application = document.querySelector('#app');
Application.innerHTML = appBody;

const sections = document.querySelectorAll('.container');

// Ripple Effect
for (const section of sections) {
  section.addEventListener('click', createRipple);
}

// Edit mode and Save CV
const editBtn = document.querySelector('.edit-btn');
const saveBtn = document.querySelector('.save-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const editableNodes = document.querySelectorAll('.editable');

editBtn.addEventListener('click', () => {
  saveBtn.classList.toggle('hidden');
  editBtn.classList.toggle('hidden');
  cancelBtn.classList.toggle('hidden');
  for (const section of sections) {
    section.classList.add('container_active');
  }
  for (const editableNode of editableNodes) {
    editableNode.setAttribute('contenteditable', true);
  }
});

saveBtn.addEventListener('click', () => {
  saveBtn.classList.toggle('hidden');
  editBtn.classList.toggle('hidden');
  cancelBtn.classList.toggle('hidden');
  for (const section of sections) {
    section.classList.remove('container_active');
  }
  for (const editableNode of editableNodes) {
    editableNode.setAttribute('contenteditable', false);
  }
  localStorage.setItem('_cvData', JSON.stringify(Application.innerHTML));
});

cancelBtn.addEventListener('click', () => {
  saveBtn.classList.toggle('hidden');
  editBtn.classList.toggle('hidden');
  cancelBtn.classList.toggle('hidden');
  window.location.reload();
});

// Cancel with "Esc" key
document.addEventListener('keyup', (event) => {
  if (
    event.key === 'Escape' &&
    editBtn.className.split(' ').includes('hidden')
  ) {
    saveBtn.classList.toggle('hidden');
    editBtn.classList.toggle('hidden');
    cancelBtn.classList.toggle('hidden');
    window.location.reload();
  }
});
