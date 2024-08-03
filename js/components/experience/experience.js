import './experience.css';

const Experience = ({ caption, list }, imgPath) => {
  return `
          <section class="container experience">
          <img class="edit-icon" src="${imgPath}" alt="Edit icon">
          <h4 class="editable">${caption}</h4>
          <ul class="experience__list">
          ${list
            .map(
              (item, i) => `
            <li class="experience__list__item">
              ${
                i === 0
                  ? '<div class="editable recent-label">most recent</div>'
                  : ''
              }
              <p class="editable work-period">
                ${item.period}
              </p>
              <div class="description">
                <div class="job">
                  <h5 class="editable">${item.position}</h5>
                  <p class="editable company">${item.company}${
                item.jobNote
                  ? `&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;${item.jobNote}`
                  : ''
              }</p>
                </div>
                <ul class="functions-list">
            ${item.functions
              .map(
                (el) => `
                <li class="editable">
            ${el}
                  </li>`
              )
              .join('')}
                </ul>
              </div>
            </li>
            `
            )
            .join('')}
                      
          </ul>
        </section>
  `;
};

export default Experience;
