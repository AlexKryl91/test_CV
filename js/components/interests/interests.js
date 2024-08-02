import './interests.css';

const Interests = ({ caption, list }) => {
  return `
  <section class="container interests">
            <h4>${caption}</h4>
            <ul class="interests__list">
            ${list
              .map(
                (item) => `
                <li class="interests__list__item">${item}</li>
                `
              )
              .join('')}
            </ul>
          </section>
  `;
};

export default Interests;
