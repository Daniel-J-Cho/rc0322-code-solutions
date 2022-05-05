let counter = 3;

function countdown() {
  if (counter > 0) {
    console.log(counter);
    counter--;
  } else if (counter === 0) {
    console.log('Blast off!');
    clearInterval(intervalID);
  }
}

const intervalID = setInterval(countdown, 1000, counter);
