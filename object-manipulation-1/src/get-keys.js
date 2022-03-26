/* exported getKeys */

function getKeys(object) {
  var keyArray = [];
  for (const key in object) {
    keyArray.push(`${key}`);
  }
  return keyArray;
}

// Create an empty array and assign it to a
// variable declaration.
// Using a for...in loop, loop through the
// keys of the object and push each key
// onto the newly created empty array.
