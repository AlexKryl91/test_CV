import '../css/style.css';

import Photo from '/img/photo_sample.png';

import Education from './components/education/education';
import Experience from './components/experience/experience';
import Header from './components/header/header';
import Interests from './components/interests/interests';
import Introduction from './components/introduction/introduction';
import Languages from './components/languages/languages';
import Links from './components/links/links';

import IconGroups from './components/tools/icons_groups';
import Tools from './components/tools/tools';
import ModalWindow from './components/modalWindow/modalWindow';

const defaultData = {
  introduction: {
    greetings: 'Hello 👋🏻 I’m',
    name: 'Karthik SR',
    profession: 'UX/UI Designer',
  },
  languages: {
    caption: 'Languages',
    list: [
      { language: 'English', level: 100 },
      { language: 'Malayalam', level: 100 },
      { language: 'Hindi', level: 75 },
    ],
  },
  experience: {
    caption: 'Experience',
    list: [
      {
        period: 'Jun. 2023 - Present',
        position: 'Marketing Manager',
        company: 'Pankayam',
        jobNote: 'Full-time',
        functions: [
          'Strategy development and planning of campaigns that promote the business and generate genuine traffic',
          'SEO Content Creation for Blogs, Website, Social media',
        ],
      },
      {
        period: '2017 - Present',
        position: 'Graphic / Web designer',
        company: 'Freelance',
        jobNote: '',
        functions: [
          'Development of internal projects from scratch, product design of brands',
          'Landing page, webapps and hybrid apps',
          'Coordinating with outside agencies, art services, web designer, marketing, printers, and colleagues as necessary.',
        ],
      },
      {
        period: 'Sep. 2021 - Jun. 2023',
        position: 'Legal Assistant',
        company: 'Law Firm',
        jobNote: 'Intern',
        functions: [
          'Provide administrative support to lawyer and enhance office effectiveness',
          'Handle communication with clients, witnesses etc.',
          'Repare case briefs and summarize depositions, interrogatories and testimony',
        ],
      },
    ],
  },
  tools: {
    caption: 'Tools',
    groups: IconGroups,
  },
  education: {
    caption: 'Education',
    list: [
      {
        period: { start: '2023', end: '' },
        speciality: 'UI/UX',
        skills: [
          'UX',
          'UI',
          'research',
          'DesignSysytem',
          'Ui',
          'wireframing',
          'figma',
          'Ux',
        ],
        institution: 'Coursera',
        like: true,
      },
      {
        period: { start: '2017', end: '2022' },
        speciality: 'Law',
        skills: ['law', 'legalStudies', 'contracts', 'internationalLaws'],
        institution: 'University of Kerala',
        like: false,
      },
      {
        period: { start: '2017', end: '' },
        speciality: 'Graphic design',
        skills: ['branding', 'web', 'illustration', 'adobe'],
        institution: 'Coursrea',
        like: false,
      },
    ],
  },
  interests: {
    caption: 'Interests',
    list: [
      'branding',
      'design',
      'photography',
      'artifical intelligence',
      'illustration',
      'typography',
      'social networks',
      'research',
      'dron pilot',
      'games',
    ],
  },
  links: {
    caption: 'Let´s chat! I´m ready to work on excinting projects',
    eMail: 'srkarthik.designscape@gmail.com',
  },
};

let data = defaultData;

// ====== Check for CV data in LocalStorage ======>
if (localStorage.getItem('_cvData')) {
  data = JSON.parse(localStorage.getItem('_cvData'));
} else {
  localStorage.setItem('_cvData', JSON.stringify(data));
}

const Application = document.querySelector('#app');

Application.innerHTML = `
    ${Header()}
    <main class="main">
      <h1 class="visually-hidden">UX/UI Desinger CV Webpage</h1>
      <div class="top-block">
        <img class="photo" src="${Photo}" alt="My Photo" />
        ${Introduction(data.introduction)}
        ${Languages(data.languages)}
      </div>
      <div class="middle-block">
        ${Experience(data.experience)}
        ${Tools(data.tools)}
      </div>
      <div class="bottom-block">
        ${Education(data.education)}
        <div class="wrapper">
        ${Interests(data.interests)}
        ${Links(data.links)}
        </div>
      </div>
    </main>
    <button type="button" id="TEST">TEST</button>
    ${ModalWindow()}
`;

const modalWindow = document.querySelector('.popup');
const modalContent = modalWindow.querySelector('.modal-content');
const modalCancelBtn = modalWindow.querySelector('.cancel-btn');
const modalApplyBtn = modalWindow.querySelector('.apply-btn');

modalCancelBtn.addEventListener('click', () => {
  modalWindow.close();
});

document.addEventListener('click', (event) => {
  let node = event.target.closest('section');
  if (node) {
    let currentSectionClass = node.classList[node.classList.length - 1];

    // modalContent.innerHTML = `${variableModalContent[currentSectionClass]}`;

    // modalWindow.showModal();
  }
});

// All inputs for editing
const greetingsInput = document.querySelector('#greetings');
const nameInput = document.querySelector('#name');
const professionInput = document.querySelector('#profession');

const lang1Input = document.querySelector('#language1');
const lang2Input = document.querySelector('#language2');
const lang3Input = document.querySelector('#language3');

const lang1LevelInput = document.querySelector('#lang1-level');
const lang2LevelInput = document.querySelector('#lang2-level');
const lang3LevelInput = document.querySelector('#lang3-level');

// Application of new information
modalApplyBtn.addEventListener('click', () => {
  data.introduction.greetings = greetingsInput.value;
  data.introduction.name = nameInput.value;
  data.introduction.profession = professionInput.value;

  data.languages.list[0].language = lang1Input.value;
  data.languages.list[1].language = lang2Input.value;
  data.languages.list[2].language = lang3Input.value;

  data.languages.list[0].level = lang1LevelInput.value;
  data.languages.list[1].level = lang2LevelInput.value;
  data.languages.list[2].level = lang3LevelInput.value;

  localStorage.setItem('_cvData', JSON.stringify(data));
  modalWindow.close();
  // setTimeout(() => window.location.reload(), 300);
});

const testBTN = document.querySelector('#TEST');
testBTN.addEventListener('click', () => console.log(Application.innerHTML));
