import './links.css';

const Links = ({ caption, eMail }, imgPath) => {
  return `
  <section class="container container_dark links">
  <img class="edit-icon" src="${imgPath}" alt="Edit icon">
            <h4 class="editable">${caption}</h4>
            <a class="editable" href="mailto: ${eMail}"
              >${eMail}</a
            >
          </section>
`;
};

export default Links;
