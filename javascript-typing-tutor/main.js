var $spanElements = document.querySelectorAll('span');
var counter = 0;

function typeMatch(event) {
  var keyCharacter = event.key;
  if (counter === $spanElements.length || counter > $spanElements.length) {
    return false;
  } else if (keyCharacter === $spanElements[counter].textContent) {
    $spanElements[counter].className = 'green-char'; // make this character green;
    counter++;// increment
    if (counter === $spanElements.length) {
      return false;
    }
    $spanElements[counter].className = 'underline';// make this character with an underline
  } else if (keyCharacter !== $spanElements[counter].textContent) { // else statement
    $spanElements[counter].className = 'red-char';// set character to red
  }
}

document.addEventListener('keydown', typeMatch);
