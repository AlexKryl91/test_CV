const data = JSON.parse(localStorage.getItem('_cvData'));

export const variableModalContent = {
  introduction: `
    <h4>Introduction</h4>
    <label class="label-text" for="greetings">Greetings</label>
    <input type="text" id="greetings" name="greetings" value="${data.introduction.greetings}"/>
    <label class="label-text" for="name">Name</label>
    <input type="text" id="name" name="name" value="${data.introduction.name}"/>
    <label class="label-text" for="profession">Profession</label>
    <input type="text" id="profession" name="profession" value="${data.introduction.profession}"/>`,
};
