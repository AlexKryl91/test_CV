import './tools.css';

const Tools = ({ caption, groups }) => {
  return `
      <section class="container tools">
            <h4>${caption}</h4>
            <ul class="tools__list">
            ${groups
              .map(
                (item) => `
                <li class="tools__list__item">
                  <div class="group-caption">${item.caption}</div>
                  ${item.icons
                    .map(
                      (icon) => `
                    <a href="${icon.ref}" target="_blank">
                      <img class="tools-img" src="${icon.path}" alt="Tool icon">
                    </a>
                    `
                    )
                    .join('')}
                </li>
                `
              )
              .join('')}
            </ul>
          </section>
      `;
};

export default Tools;
