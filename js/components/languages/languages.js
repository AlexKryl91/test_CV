import './languages.css';

const Languages = ({ caption, list }) => {
  const levels = {
    25: 'level-25',
    50: 'level-50',
    75: 'level-75',
    100: 'level-100',
  };

  return `
        <section class="container languages">
          <h4>${caption}</h4>
          <ul class="languages__list">
          ${list
            .map(
              (item) => `
            <li>
              <h5 class="lang-name">${item.language}</h5>
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
