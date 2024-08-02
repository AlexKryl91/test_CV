import './education.css';
import Like from '/img/heart.svg';

const Education = ({ caption, list }) => {
  return `
        <section class="container education">
          <h4>${caption}</h4>
          <ul class="education__list">
          ${list
            .map(
              (item, i) => `
            <li class="education__list__item">
              ${
                i === 0
                  ? `<img class="like" src="${Like}" alt="Like icon">`
                  : ''
              }
              <h5 class="edu-period"><time datetime="${item.period.start}">${
                item.period.start
              }</time>${
                item.period.end
                  ? ` - <time datetime="${item.period.end}">${item.period.end}</time>
              `
                  : ''
              }</h5>
              <h5>${item.speciality}</h5>
              <span class="tags"
                >${item.skills.map((skill) => `#${skill}`).join(' ')}</span
              >
              <p class="institute">${item.institution}</p>
            </li>
            `
            )
            .join('')}
          </ul>
        </section> 
    `;
};

export default Education;
