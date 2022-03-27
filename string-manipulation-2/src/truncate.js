/* exported truncate */

function truncate(length, string) {
  return string.slice(0, length) + '...';
}

// Using the slice method, slice the 'string'
// passed in as an argument from zero index to
// 'length' passed in as argument.
// Concatenate the result to an ellipses(...)
// and return it on same line.
