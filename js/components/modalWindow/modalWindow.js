import './modalWindow.css';

let data = JSON.parse(localStorage.getItem('_cvData'));

const ModalWindow = () => {
  return `
    <dialog class="popup" role="dialog" aria-label="Edit information">
      <div class="popup-container">
        <div class="modal-content">

        <h4>Introduction</h4>
        <label class="label-text" for="greetings">Greetings</label>
        <input type="text" id="greetings" name="greetings" value="${
          data.introduction.greetings
        }"/>
        <label class="label-text" for="name">Name</label>
        <input type="text" id="name" name="name" value="${
          data.introduction.name
        }"/>
        <label class="label-text" for="profession">Profession</label>
        <input type="text" id="profession" name="profession" value="${
          data.introduction.profession
        }"/>

        <h4>${data.languages.caption}</h4>
        ${data.languages.list
          .map(
            (item, i) => `
            <label class="label-text" for="language${i + 1}">Language ${
              i + 1
            }</label>
            <input type="text" id="language${i + 1}" name="greetings" value="${
              item.language
            }"/>
            <select id="lang${i + 1}-level">
              <option value="25" ${
                item.level == 25 ? 'selected' : ''
              }>Elementary</option>
              <option value="50" ${
                item.level == 50 ? 'selected' : ''
              }>Intermediate</option>
              <option value="75" ${
                item.level == 75 ? 'selected' : ''
              }>Upper Intermediate</option>
              <option value="100" ${
                item.level == 100 ? 'selected' : ''
              }>Advanced</option>
            </select>





            `
          )
          .join('')}





            
        </div>

        
        <button type="button" class="apply-btn">Apply</button>
        <button type="button" class="cancel-btn">Cancel</button>
      </div>
    </dialog>
`;
};

export default ModalWindow;
