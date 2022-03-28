/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var newStr = string.split('');
  var twoChar = newStr[secondIndex];
  newStr[secondIndex] = newStr[firstIndex];
  newStr[firstIndex] = twoChar;
  return newStr.join('');
}
