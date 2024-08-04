import './header.css';

const Header = () => {
  return `
    <header class="header">
      <button class="btn cancel-btn hidden" type="button">Cancel</button>
      <div class="btn-wrapper">
        <button class="btn edit-btn" type="button">Edit</button>
        <button class="btn save-btn hidden" type="button">Save</button>
      </div>
      <button id="download" class="btn download-btn" type="button">Download PDF</button>
    </header>
  `;
};

export default Header;
