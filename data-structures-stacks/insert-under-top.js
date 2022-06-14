/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) {
    return undefined;
  } else {
    const poppedVal = stack.pop();
    stack.push(value);
    stack.push(poppedVal);
  }
}
