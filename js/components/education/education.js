import './education.css';
import Like from '/img/heart.svg';

const Education = ({ caption, list }, imgPath) => {
  return `
        <section class="container education">
        <img class="edit-icon" src="${imgPath}" alt="Edit icon">
          <h4 class="editable">${caption}</h4>
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
              <h5 class="editable edu-period"><time datetime="${
                item.period.start
              }">${item.period.start}</time>${
                item.period.end
                  ? ` - <time datetime="${item.period.end}">${item.period.end}</time>
              `
                  : ''
              }</h5>
              <h5 class="editable">${item.speciality}</h5>
              <span class="editable tags"
                >${item.skills.map((skill) => `#${skill}`).join(' ')}</span
              >
              <p class="editable institute">${item.institution}</p>
            </li>
            `
            )
            .join('')}
          </ul>
        </section> 
    `;
};

export default Education;
