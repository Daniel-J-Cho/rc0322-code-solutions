/* exported pick */

function pick(source, keys) {
  var newObject = {};
  for (let i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      newObject[keys[i]] = source[keys[i]];
    } else {
      continue;
    }
  }
  return newObject;
}

// Create empty object and assign it to
// a new variable.
// Loop through indexes of 'keys' array.
// Pass in value at keys[i] as a property
// of 'source' object; and use strictly
// unequal operator against 'undefined'
// to make sure value at source[keys[i]]
// is not undefined.
// If it isn't, add it to new object at
// newobject[keys[i]].
// Else, continue to next index.
// Return new object.
