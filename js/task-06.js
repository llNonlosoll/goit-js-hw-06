const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', symbolsControl);

function symbolsControl() {
  if (textInput.value.length === Number(textInput.dataset.length)) {
    console.log(textInput.value.length);
    return textInput.classList.add('valid') + textInput.classList.remove('invalid');
  }
  console.log(textInput.value.length);
  return textInput.classList.remove('valid') + textInput.classList.add('invalid');
}
