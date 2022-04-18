/* exported isPalindromic */

function isPalindromic(string) {
  var str = string.split('');
  var newStr = [];

  var revStr = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      continue;
    } else {
      newStr.push(str[i]);
    }
  }

  for (let i = newStr.length - 1; i >= 0; i--) {
    revStr.push(newStr[i]);
  }

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] !== revStr[i]) {
      return false;
    } else {
      continue;
    }
  }
  return true;
}

// Split 'string' using '.split('')
// and assign it to a variable.
// Declare new variable for a new array.
// Declare new variable for a new reversed
// array.
// 'for loop' through the splitted 'string' array.
// And if 'i' of split 'string' is a whitespace,
// continue; else add 'i' to new array.
// 'for loop' through array from
// splitting 'string' and assign
// each character to new array.
// 'for loop' through new array with initialization
// set to length - 1 and decrement by one in
// final expression. Condition should countdown
// to zero.  Push 'i' at new array to new reversed
// array.
// 'for loop' through new array and compare with
// if statement whether 'i' at new array is not equal to
// 'i' at new reversed array. If it isn't, return false.
// Else, contine. If 'for loop' makes it through,\
// return true.
