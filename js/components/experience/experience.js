import './experience.css';

const Experience = ({ caption, list }) => {
  return `
          <section class="container experience">
          <h4>${caption}</h4>
          <ul class="experience__list">
          ${list
            .map(
              (item, i) => `
            <li class="experience__list__item">
              ${i === 0 ? '<div class="recent-label">most recent</div>' : ''}
              <p class="work-period">
                ${item.period}
              </p>
              <div class="description">
                <div class="job">
                  <h5>${item.position}</h5>
                  <p class="company">${item.company}${
                item.jobNote
                  ? `&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;${item.jobNote}`
                  : ''
              }</p>
                </div>
                <ul class="functions-list">
            ${item.functions
              .map(
                (el) => `
                <li>
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
