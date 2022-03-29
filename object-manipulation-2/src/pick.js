/* exported pick */

function pick(source, keys) {
  var newObject = {};
  for (let i = 0; i < keys.length; i++) {
    if ((keys[i] === source[keys[i]]) && (source[keys[i]] !== undefined)) {
      newObject = source[keys[i]];
    } else {
      continue;
    }
  }
  return newObject;
}

// Create empty object and assign it to
// a new variable.
// Loop through indexes of 'keys' array.
// Check to see if index 'i' of 'keys'
// is a property of 'source' object.
// If it is, add it to new object.
// Else, continue to next index.
// Return new object.
