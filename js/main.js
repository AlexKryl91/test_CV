import '../css/style.css';
import initialData from './initialData';

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

import createRipple from './UI/rippleEffect';
import createPdf from './utils/createPdf';

import ModalWindow from './components/modalWindow/modalWindow';

let appBody = `
    ${Header()}
    <main id="cv-body" class="main">
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
    ${ModalWindow()}
`;

if (sessionStorage.getItem('_cvData')) {
  appBody = JSON.parse(sessionStorage.getItem('_cvData'));
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

function buttonsToggleClass(isEditable) {
  saveBtn.classList.toggle('hidden');
  editBtn.classList.toggle('hidden');
  cancelBtn.classList.toggle('hidden');
  for (const section of sections) {
    section.classList.toggle('container_active');
  }
  for (const editableNode of editableNodes) {
    editableNode.setAttribute('contenteditable', isEditable);
  }
}

editBtn.addEventListener('click', () => {
  buttonsToggleClass(true);
});

saveBtn.addEventListener('click', () => {
  buttonsToggleClass(false);
  sessionStorage.setItem('_cvData', JSON.stringify(Application.innerHTML));
});

cancelBtn.addEventListener('click', () => {
  buttonsToggleClass(false);
  setTimeout(() => window.location.reload(), 200);
});

// Cancel with "Esc" key
document.addEventListener('keyup', (event) => {
  if (
    event.key === 'Escape' &&
    editBtn.className.split(' ').includes('hidden')
  ) {
    buttonsToggleClass(false);
    setTimeout(() => window.location.reload(), 200);
  }
});

// Download PDF
const downloadBtn = document.getElementById('download');
const cvBody = document.getElementById('cv-body');
// Modal window with question
const modalPDF = document.querySelector('.popup');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

downloadBtn.addEventListener('click', () => {
  if (editBtn.className.split(' ').includes('hidden')) {
    modalPDF.showModal();
  } else {
    createPdf(cvBody);
  }
});

yesBtn.addEventListener('click', () => {
  modalPDF.close();
  buttonsToggleClass(false);
  sessionStorage.setItem('_cvData', JSON.stringify(Application.innerHTML));
  createPdf(cvBody);
});

noBtn.addEventListener('click', () => {
  modalPDF.close();
});
