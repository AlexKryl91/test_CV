import './header.css';

import PDF from '/pdf/test_cv.pdf';

const Header = () => {
  return `
    <header class="header">
      <a class="download-btn" href="${PDF}" download>Download PDF</a>
    </header>
  `;
};

export default Header;
