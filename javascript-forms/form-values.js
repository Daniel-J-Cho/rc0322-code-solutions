var $form = document.getElementById('contact-form');

function value(event) {
  event.preventDefault();
  var newObj = {};
  newObj.name = event.target.elements.name.value;
  newObj.email = event.target.elements.email.value;
  newObj.message = event.target.elements.message.value;
  console.log(newObj);
  event.target.reset();
}

$form.addEventListener('submit', value);
