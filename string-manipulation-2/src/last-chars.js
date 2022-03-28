/* exported lastChars */

function lastChars(length, string) {
  var lastStr = '';
  for (let i = string.length - length; i < string.length; i++) {
    if (length > string.length) {
      lastStr = string;
    } else {
      lastStr += string[i];
    }
  }
  return lastStr;
}
