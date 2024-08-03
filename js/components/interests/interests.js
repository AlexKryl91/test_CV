import './interests.css';

const Interests = ({ caption, list }, imgPath) => {
  return `
          <section class="container interests">
            <img class="edit-icon" src="${imgPath}" alt="Edit icon">
            <h4 class="editable">${caption}</h4>
            <ul class="interests__list">
            ${list
              .map(
                (item) => `
                <li class="editable interests__list__item">${item}</li>
                `
              )
              .join('')}
            </ul>
          </section>
  `;
};

export default Interests;
