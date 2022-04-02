/* exported zip */

function zip(first, second) {
  var newArr = [];
  var subArr = [];

  if (first.length < second.length) {
    for (let i = 0; i < first.length; i++) {
      subArr.push(first[i]);
      subArr.push(second[i]);
      newArr.push(subArr);
      subArr = [];
    }
  } else if (first.length > second.length) {
    for (let j = 0; j < second.length; j++) {
      subArr.push(first[j]);
      subArr.push(second[j]);
      newArr.push(subArr);
      subArr = [];
    }
  } else {
    for (let i = 0; i < first.length; i++) {
      subArr.push(first[i]);
      subArr.push(second[i]);
      newArr.push(subArr);
      subArr = [];
    }
  }

  return newArr;
}

// Create new array and assign it to a
// variable.
// Use if, else if statements to find out
// which array is shorter.
