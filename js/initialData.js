import IconGroups from './components/tools/icons_groups';

const initialData = {
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

export default initialData;
