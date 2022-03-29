var $openButton = document.getElementById('open-button');
var $modal = document.getElementById('modal');
var $noButton = document.getElementById('no-button');
var $container = document.getElementById('container');

function displayModal(event) {
  if ($modal.className === 'modal-hidden') {
    $modal.className = 'modal-display';
    $container.className = 'container-two';
  }
}

function hideModal(event) {
  if ($modal.className === 'modal-display') {
    $modal.className = 'modal-hidden';
    $container.className = 'container';
  }
}

$openButton.addEventListener('click', displayModal);
$noButton.addEventListener('click', hideModal);
