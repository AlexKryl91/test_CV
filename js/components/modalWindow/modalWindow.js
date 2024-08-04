import './modalWindow.css';

let data = JSON.parse(localStorage.getItem('_cvData'));

const ModalWindow = () => {
  return `
    <dialog class="popup" role="dialog" aria-label="Edit information">
      <div class="popup-container">
        <p class="question">Do you want to save changes and create PDF file?</p>       
        <button type="button" class="yes-btn">Yes</button>
        <button type="button" class="no-btn">No</button>
      </div>
    </dialog>
`;
};

export default ModalWindow;
