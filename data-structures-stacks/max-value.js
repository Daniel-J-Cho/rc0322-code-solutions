/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  } else if (stack.peek() !== undefined) {
    let max = stack.pop();
    while (max <= stack.peek()) {
      max = stack.pop();
    }
    return max;
  }
}
