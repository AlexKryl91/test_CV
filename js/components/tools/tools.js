import './tools.css';

const Tools = ({ caption, groups }, imgPath) => {
  return `
      <section class="container tools">
      <img class="edit-icon" src="${imgPath}" alt="Edit icon">
            <h4 class="editable">${caption}</h4>
            <ul class="tools__list">
            ${groups
              .map(
                (item) => `
                <li class="tools__list__item">
                  <div class="editable group-caption">${item.caption}</div>
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
