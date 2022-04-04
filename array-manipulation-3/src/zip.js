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
    for (let i = 0; i < second.length; i++) {
      subArr.push(first[i]);
      subArr.push(second[i]);
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
// variable.  Create a sub-array and assign
// it to a variable.
// Use if, else if, else statements to test
// whether 'first' or 'second' array is shorter
// Within each condition, set shorter array as
// the length to test against in the condition
// expression of the associated for loop.
// Push 'i' at 'first' array onto sub-array.
// Push 'i' at 'second' array onto sub-array.
// Push resulting sub-array onto new array.
// Reset sub-array to empty array.
// After if, else if, and else statements,
// return new array.
