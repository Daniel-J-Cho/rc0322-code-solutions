var $button = document.getElementById('button');
var $container = document.getElementById('container');

function changeColors(event) {
  if ($button.className === 'off-button') {
    $button.className = 'on-button';
    $container.className = 'container-two';
  } else if ($button.className === 'on-button') {
    $button.className = 'off-button';
    $container.className = 'container';
  }
}

$button.addEventListener('click', changeColors);
