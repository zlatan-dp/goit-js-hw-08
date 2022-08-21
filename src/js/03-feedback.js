import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const FEEDBACK_FORM_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(saveData, 500));
form.addEventListener('submit', submitData);

const formData = {};

populateForm();

function saveData(evt) {
  evt.preventDefault();
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(FEEDBACK_FORM_KEY, JSON.stringify(formData));
}

function submitData(evt) {
  evt.preventDefault();
  console.log(
    `email: ${evt.currentTarget.email.value}, message: ${evt.currentTarget.message.value}`
  );
  evt.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_FORM_KEY);
}

function populateForm() {
  let savedData = localStorage.getItem(FEEDBACK_FORM_KEY);

  if (savedData) {
    //form.email.value = savedData.email || '';
    //form.message.value = savedData.message || '';
    savedData = JSON.parse(savedData);
    Object.entries(savedData).forEach(([name, value]) => {
      formData[name] = value;
      form.elements[name].value = value;
    });
  }
}
