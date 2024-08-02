import './links.css';

const Links = ({ caption, eMail }) => {
  return `
  <section class="container-dark links">
            <h4>${caption}</h4>
            <a href="mailto: ${eMail}"
              >${eMail}</a
            >
          </section>
`;
};

export default Links;
