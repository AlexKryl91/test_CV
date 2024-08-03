import './languages.css';

const Languages = ({ caption, list }, imgPath) => {
  const levels = {
    25: 'level-25',
    50: 'level-50',
    75: 'level-75',
    100: 'level-100',
  };

  return `
        <section class="container languages">
        <img class="edit-icon" src="${imgPath}" alt="Edit icon">
          <h4 class="editable">${caption}</h4>
          <ul class="languages__list">
          ${list
            .map(
              (item) => `
            <li>
              <h5 class="editable lang-name">${item.language}</h5>
              <div class="progress-bar">
                <div class="progress-bar__fill ${levels[item.level]}"></div>
              </div>
            </li>
            `
            )
            .join('')}
          </ul>
        </section>
  `;
};

export default Languages;
