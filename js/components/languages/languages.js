import './languages.css';

const Languages = ({ caption, list }) => {
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
                <div class="progress-bar__fill"></div>
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
