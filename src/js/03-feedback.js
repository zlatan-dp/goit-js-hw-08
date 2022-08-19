import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const FEEDBACK_FORM_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(saveData, 500));
form.addEventListener('submit', submitData);

populateForm();

const formData = {};

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
  const savedData = JSON.parse(localStorage.getItem(FEEDBACK_FORM_KEY));
  if (savedData) {
    form.email.value = savedData.email || '';
    form.message.value = savedData.message || '';
  }
}
