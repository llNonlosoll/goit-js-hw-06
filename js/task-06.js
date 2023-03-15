const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', symbolsControl);

function symbolsControl() {
  if (textInput.value.length === Number(textInput.dataset.length)) {
    console.log(textInput.value.length);
    textInput.classList.remove('invalid');
    return textInput.classList.add('valid');
  }
  console.log(textInput.value.length);
  textInput.classList.add('invalid');
  return textInput.classList.remove('valid');
}
