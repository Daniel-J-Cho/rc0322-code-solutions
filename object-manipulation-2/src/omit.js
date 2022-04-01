/* exported omit */

function omit(source, keys) {
  var newObj = {};
  for (var key in source) {
    if (!keys.includes(key)) {
      newObj[key] = source[key];
    }
  }
  return newObj;
}

// Create an empty object and assign it
// to a new variable.
// Loop through properties in 'source'
// object with a for...in loop.
// Nest an if statement with a 'not'
// operator in front of and includes method
// to check if 'key' is in 'keys' array.
// If it isn't in the 'keys' array, assign
// the property (key) of 'source' object to
// property (key) of the new empty object.
// Return new object.
