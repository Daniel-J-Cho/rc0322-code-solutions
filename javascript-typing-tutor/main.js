var $spanElements = document.querySelectorAll('span');
var counter = 0;

function typeMatch(event) {
  var keyCharacter = event.key;
  if (counter === $spanElements.length || counter > $spanElements.length) {
    return false;
  } else if (keyCharacter === $spanElements[counter].textContent) {
    $spanElements[counter].className = 'green-char';
    counter++;
    if (counter === $spanElements.length) {
      return false;
    }
    $spanElements[counter].className = 'underline';
  } else if (keyCharacter !== $spanElements[counter].textContent) {
    $spanElements[counter].className = 'red-char';
  }
}

document.addEventListener('keydown', typeMatch);
