/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  for (let count = 0; count < index; count++) {
    const dequeue = queue.dequeue();
    queue.enqueue(dequeue);
  }
  const indexDequeue = queue.dequeue();
  return indexDequeue;
}
