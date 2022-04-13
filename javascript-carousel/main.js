var $pokeImg = document.querySelector('.poke-image');
var $leftArrow = document.querySelector('.previous-poke-link');
var $rightArrow = document.querySelector('.next-poke-link');
var $circIconContainer = document.querySelector('.circle-icons');
// var $anchorDotActive = document.querySelector('.dot.active');
// var $anchorDot = document.querySelector('.dot');
// var $circleActive = document.querySelector('.circle.active');
var $circleOne = document.querySelector('.circle-one');
var $circleTwo = document.querySelector('.circle-two');
var $circleThree = document.querySelector('.circle-three');
var $circleFour = document.querySelector('.circle-four');
var $circleFive = document.querySelector('.circle-five');
// var $circles = document.querySelectorAll('.circle');

function pokeImg025() {
  $pokeImg.setAttribute('src', 'images/025.png');
  $circleOne.className = 'fas fa-circle';
  $circleTwo.className = 'far fa-circle';
  $circleThree.className = 'far fa-circle';
  $circleFour.className = 'far fa-circle';
  $circleFive.className = 'far fa-circle';
}

function pokeImg039() {
  $pokeImg.setAttribute('src', 'images/039.png');
  $circleOne.className = 'far fa-circle';
  $circleTwo.className = 'fas fa-circle';
  $circleThree.className = 'far fa-circle';
  $circleFour.className = 'far fa-circle';
  $circleFive.className = 'far fa-circle';
}

function pokeImg007() {
  $pokeImg.setAttribute('src', 'images/007.png');
  $circleOne.className = 'far fa-circle';
  $circleTwo.className = 'far fa-circle';
  $circleThree.className = 'fas fa-circle';
  $circleFour.className = 'far fa-circle';
  $circleFive.className = 'far fa-circle';
}

function pokeImg004() {
  $pokeImg.setAttribute('src', 'images/004.png');
  $circleOne.className = 'far fa-circle';
  $circleTwo.className = 'far fa-circle';
  $circleThree.className = 'far fa-circle';
  $circleFour.className = 'fas fa-circle';
  $circleFive.className = 'far fa-circle';
}

function pokeImg001() {
  $pokeImg.setAttribute('src', 'images/001.png');
  $circleOne.className = 'far fa-circle';
  $circleTwo.className = 'far fa-circle';
  $circleThree.className = 'far fa-circle';
  $circleFour.className = 'far fa-circle';
  $circleFive.className = 'fas fa-circle';
}

var intervalID = setInterval(switchImg, 3000);

function switchImg() {
  if ($pokeImg.getAttribute('src') === 'images/025.png') {
    pokeImg039();
  } else if ($pokeImg.getAttribute('src') === 'images/039.png') {
    pokeImg007();
  } else if ($pokeImg.getAttribute('src') === 'images/007.png') {
    pokeImg004();
  } else if ($pokeImg.getAttribute('src') === 'images/004.png') {
    pokeImg001();
  } else if ($pokeImg.getAttribute('src') === 'images/001.png') {
    pokeImg025();
  }
}

$rightArrow.addEventListener('click', function (event) {
  clearInterval(intervalID);
  if ($pokeImg.getAttribute('src') === 'images/025.png') {
    pokeImg039();
  } else if ($pokeImg.getAttribute('src') === 'images/039.png') {
    pokeImg007();
  } else if ($pokeImg.getAttribute('src') === 'images/007.png') {
    pokeImg004();
  } else if ($pokeImg.getAttribute('src') === 'images/004.png') {
    pokeImg001();
  } else if ($pokeImg.getAttribute('src') === 'images/001.png') {
    pokeImg025();
  }
  intervalID = setInterval(switchImg, 3000);
});

$leftArrow.addEventListener('click', function (event) {
  clearInterval(intervalID);
  if ($pokeImg.getAttribute('src') === 'images/025.png') {
    pokeImg001();
  } else if ($pokeImg.getAttribute('src') === 'images/001.png') {
    pokeImg004();
  } else if ($pokeImg.getAttribute('src') === 'images/004.png') {
    pokeImg007();
  } else if ($pokeImg.getAttribute('src') === 'images/007.png') {
    pokeImg039();
  } else if ($pokeImg.getAttribute('src') === 'images/039.png') {
    pokeImg025();
  }
  intervalID = setInterval(switchImg, 3000);
});

$circIconContainer.addEventListener('click', function (event) {
  clearInterval(intervalID);
  // if (event.target.matches('.circle'))
  //   for (var i = 0; i < $circles.length; i++) {
  //     if (event.target === $circles[i]) {
  //       $circles[i].className = 'circle active';
  //     } else {
  //       $circles[i].className = 'circle';
  //     }
  //   });
  if (event.target === $circleOne) {
    pokeImg025();
  } else if (event.target === $circleTwo) {
    pokeImg039();
  } else if (event.target === $circleThree) {
    pokeImg007();
  } else if (event.target === $circleFour) {
    pokeImg004();
  } else if (event.target === $circleFive) {
    pokeImg001();
  }
  intervalID = setInterval(switchImg, 3000);
});
