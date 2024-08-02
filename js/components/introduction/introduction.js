import './introduction.css';

const Introduction = ({ greetings, name, profession }) => {
  return `
        <section class="container introduction">
          <h5>${greetings}</h5>
          <div>
            <h2>${name}</h2>
            <h3>${profession}</h3>
          </div>
        </section>
`;
};

export default Introduction;
