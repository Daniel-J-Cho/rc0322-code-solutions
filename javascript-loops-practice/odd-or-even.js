/* exported oddOrEven */

function oddOrEven(numbers) {
  var oddEvenArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 2) === 0) {
      oddEvenArray.push('even');
    } else {
      oddEvenArray.push('odd');
    }
  }
  return oddEvenArray;
}
