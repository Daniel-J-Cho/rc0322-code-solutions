/* exported reverseWords */

function reverseWords(string) {
  var newStr = '';
  var spltStr = string.split(' ');
  var revSpltStr = [];
  var secondSplt = [];
  var revWord = [];
  var joinWrd = [];
  for (let i = 0; i < spltStr.length; i++) {
    secondSplt = spltStr[i].split('');
    revWord = secondSplt.reverse();
    joinWrd = revWord.join('');
    revSpltStr.push(joinWrd);
  }
  newStr = revSpltStr.join(' ');
  return newStr;
}
