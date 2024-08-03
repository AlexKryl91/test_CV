import './header.css';

import PDF from '/pdf/test_cv.pdf';

const Header = () => {
  return `
    <header class="header">
      <button class="btn cancel-btn hidden" type="button">Cancel</button>
      <div class="btn-wrapper">
        <button class="btn edit-btn" type="button">Edit</button>
        <button class="btn save-btn hidden" type="button">Save</button>
      </div>
      <a href="${PDF}" download><div class="btn download-btn">Download PDF</div></a>
    </header>
  `;
};

export default Header;
