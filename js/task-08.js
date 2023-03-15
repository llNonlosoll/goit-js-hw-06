const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    email,
    password,
  };

  if (formElements.email.value !== '' && formElements.password.value !== '') {
    console.log(formData);
    return form.reset();
  }
  alert('Я тобі кажу, що всі поля повинні бути заповнені!!!');
}
