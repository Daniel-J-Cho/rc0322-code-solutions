/* exported oddOrEven */

function oddOrEven(numbers) {
  var oddEvenArrayy = [];
  for (let i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 2) === 0) {
      oddEvenArrayy.push('even');
    } else {
      oddEvenArrayy.push('odd');
    }
  }
  return oddEvenArrayy;
}
