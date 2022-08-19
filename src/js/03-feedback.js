const form = document.querySelector('.feedback-form');
const FEEDBACK_FORM_KEY = 'feedback-form-state';

form.addEventListener('input', saveData);
//form.addEventListener('submit', submitData);

populateForm();

const formData = {};

function saveData(evt) {
  evt.preventDefault();
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(FEEDBACK_FORM_KEY, JSON.stringify(formData));
}

function populateForm() {
  const savedData = JSON.parse(localStorage.getItem(FEEDBACK_FORM_KEY));
  if (savedData) {
    //console.log(savedData.email);
    form.email.value = savedData.email;
    form.message.value = savedData.message;
  }
}
