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

const AppData = {
  intro: {
    greetings: 'Hello 👋🏻 I’m',
    name: 'Karthik SR',
    profession: 'UX/UI Designer',
  },
  languages: {
    caption: 'Languages',
    list: [
      { language: 'English', level: 4 },
      { language: 'Malayalam', level: 4 },
      { language: 'Hindi', level: 3 },
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

document.querySelector('#app').innerHTML = `
    ${Header()}
    <main class="main">
      <h1 class="visually-hidden">UX/UI Desinger CV Webpage</h1>
      <div class="top-block">
        <img class="photo" src="${Photo}" alt="My Photo" />
        ${Introduction(AppData.intro)}
        ${Languages(AppData.languages)}
      </div>
      <div class="middle-block">
        ${Experience(AppData.experience)}
        ${Tools(AppData.tools)}
      </div>
      <div class="bottom-block">
        ${Education(AppData.education)}
        <div class="wrapper">
        ${Interests(AppData.interests)}
        ${Links(AppData.links)}
        </div>
      </div>
    </main>
`;
