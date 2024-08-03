import './introduction.css';

const Introduction = ({ greetings, name, profession }, imgPath) => {
  return `
        <section class="container introduction">
          <img class="edit-icon" src="${imgPath}" alt="Edit icon">
          <h5 class="editable">${greetings}</h5>
          <div>
            <h2 class="editable">${name}</h2>
            <h3 class="editable">${profession}</h3>
          </div>
        </section>
`;
};

export default Introduction;
