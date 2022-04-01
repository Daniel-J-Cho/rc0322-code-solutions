/* exported defaults */

function defaults(target, source) {
  for (var key in source) {
    target[key] = source[key];
  }
}
