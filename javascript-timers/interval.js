var $countdown = document.querySelector('.countdown-display');
var counter = 4;

setInterval(countdown, 1000);

function countdown() {
  $countdown.textContent = counter -= 1;
  if (counter < 1) {
    $countdown.textContent = '~Earth Beeeelooowww Us~';
  }
}
