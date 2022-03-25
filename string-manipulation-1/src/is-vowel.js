/* exported isVowel */

function isVowel(char) {
  var vowelArray = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (let i = 0; i < vowelArray.length; i++) {
    if (char === vowelArray[i]) {
      return true;
    }
  }
  return false;
}
