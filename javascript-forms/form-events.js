var $inputName = document.getElementById('user-name');
var $inputEmail = document.getElementById('user-email');
var $message = document.getElementById('user-message');

function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name: ', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name: ', event.target.name);
}

function handleInput(event) {
  console.log('event.target.name: ', event.target.name);
  console.log('Value of ' + event.target.name + ':', event.target.value);
}

$inputName.addEventListener('focus', handleFocus);
$inputEmail.addEventListener('focus', handleFocus);
$message.addEventListener('focus', handleFocus);

$inputName.addEventListener('blur', handleBlur);
$inputEmail.addEventListener('blur', handleBlur);
$message.addEventListener('blur', handleBlur);

$inputName.addEventListener('input', handleInput);
$inputEmail.addEventListener('input', handleInput);
$message.addEventListener('input', handleInput);
