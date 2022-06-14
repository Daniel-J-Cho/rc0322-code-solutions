/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  }
  const poppedVal = stack.pop();
  if (stack.peek() === undefined) {
    stack.push(poppedVal);
  } else if (stack.peek() !== undefined) {
    const secondPop = stack.pop();
    stack.push(secondPop);
    stack.push(poppedVal);
    return secondPop;
  }
}
