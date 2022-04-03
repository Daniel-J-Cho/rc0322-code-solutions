/* exported reverseWords */

function reverseWords(string) {
  var newStr = '';
  var spltStr = string.split(' ');
  var revSpltStr = [];
  var secondSplt = [];
  for (let i = 0; i < spltStr.length; i++) {
    secondSplt = spltStr[i].split('').reverse().join('');
    revSpltStr.push(secondSplt);
  }
  newStr = revSpltStr.join(' ');
  return newStr;
}
