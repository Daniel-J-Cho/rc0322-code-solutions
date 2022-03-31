/* exported omit */

function omit(source, keys) {
  var newObj = {};
  for (let i = 0; i < keys.length; i++) {
    for (const key in source) {
      if (keys[i] === source[key]) {
        continue;
      } else {
        newObj[key] = source[key];
      }
    }
  }
  return newObj;
}

// Create an empty object and assign it
// to a new variable.
// Loop through 'keys' array. If keys[i]
// is a property of 'source', return false.
// Else, add property of 'source' into
// new empty object. Return new object.
