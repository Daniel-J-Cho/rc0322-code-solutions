/* exported isAnagram */

function isAnagram(firstString, secondString) {
  var newFirst = firstString.split('').sort();
  var newSecond = secondString.split('').sort();
  var firstArr = [];
  var secondArr = [];
  for (let i = 0; i < newFirst.length; i++) {
    if (newFirst[i] === ' ') {
      continue;
    } else {
      firstArr.push(newFirst[i]);
    }
  }

  for (let i = 0; i < newSecond.length; i++) {
    if (newSecond[i] === ' ') {
      continue;
    } else {
      secondArr.push(newSecond[i]);
    }
  }

  var newFirstStr = firstArr.join('');
  var newSecondStr = secondArr.join('');

  if (newFirstStr === newSecondStr) {
    return true;
  } else {
    return false;
  }
}

// Split and sort 'firstString' and 'secondString'
// and assign them to their own variables.
// Create two new empty arrays and assign them to their
// own variables.
// Use 'for' loops for each newly created array from
// 'firstString' and 'secondString' to check if
// they have whitespaces. If they do, continue.
// Else, push 'i' to the new empty array.
// 'join' both arrays with whitespaces taken out and
// assign them to variables. If joined first string is
// equal to joined second string, return true.
// Else, return false.
