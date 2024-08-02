import '../css/style.css';
import javascriptLogo from '../src/img/javascript.svg';
import viteLogo from '../src/img/vite.svg';

document.querySelector('#app').innerHTML = '';

// document.querySelector('#app').innerHTML = `
//   <main class="main">
//     <h1 class="visually-hidden">UX/UI Desinger CV Webpage</h1>
//     <div class="top-block">
//       <img class="photo" src="../src/img/photo_samlpe.png" alt="My Photo" />
//       <section class="container itroduction"></section>
//       <section class="container languages"></section>
//     </div>
//     <div class="middle-block">
//       <section class="container experiance"></section>
//       <section class="tools"></section>
//     </div>
//     <div class="bottom-block">
//       <section class="container education"></section>
//       <section class="container interests"></section>
//       <section class="container-dark links"></section>
//     </div>
//   </main>
// `;

const AppData = {
  into: {
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
  },
  education: {
    caption: 'Education',
    list: [
      {
        period: '2023',
        speciality: 'UI/UX',
        skils: [
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
        period: '2017 - 2022',
        speciality: 'Law',
        skils: ['law', 'legalStudies', 'contracts', 'internationalLaws'],
        institution: 'University of Kerala',
        like: false,
      },
      {
        period: '2017',
        speciality: 'Graphic design',
        skils: ['branding', 'web', 'illustration', 'adobe'],
        institution: 'Coursrea',
        like: false,
      },
    ],
  },
  interests: [
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
  links: {
    caption: 'Let´s chat! I´m ready to work on excinting projects',
    eMail: 'srkarthik.designscape@gmail.com',
  },
};
