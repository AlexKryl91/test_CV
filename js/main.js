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

downloadBtn.addEventListener('click', () => {
  console.log(
    'window width',
    window.innerWidth,
    'window height',
    window.innerHeight
  );
  console.log(
    'CV body width',
    cvBody.clientWidth,
    'CV body height',
    cvBody.clientHeight
  );

  let opt = {};

  if (window.innerWidth <= 612) {
    opt = {
      margin: 0,
      filename: 'test_CV.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: {
        scale: 2,
        width: window.innerWidth,
        height: window.innerHeight,
      },
      jsPDF: {
        unit: 'px',
        hotfixes: ['px_scaling'],
        format: [cvBody.clientWidth, cvBody.clientHeight],
        orientation: 'portrait',
        putOnlyUsedFonts: true,
      },
    };
  } else {
    opt = {
      margin: 0,
      filename: 'test_CV.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: {
        scale: 2,
        width: cvBody.clientWidth,
        height: cvBody.clientHeight,
        x: (window.innerWidth - cvBody.clientWidth) / 2,
      },
      jsPDF: {
        unit: 'mm',
        format: [210, 300],
        orientation: 'portrait',
        putOnlyUsedFonts: true,
      },
    };
  }

  html2pdf().set(opt).from(cvBody).save();
});
