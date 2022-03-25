/* exported initial */

function initial(array) {
  const arrayWithoutLast = [];
  for (let i = 0; i < array.length - 1; i++) {
    arrayWithoutLast.push(array[i]);
  }
  return arrayWithoutLast;
}

// Create a new array and assign it to a variable declaration.
// Use a for loop to loop through the array passed in as an argument.
// In the condition expression of the for loop, subtract 1 from the
// length property of the argument array and use the '<' comparison
// operator in order to exclude the last index of the array.
// Within the code block, push each index to the newly created empty array.
// Return the new array after the for loop.
