/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  const dequeued = queue.dequeue();
  if (queue.peek() === undefined) {
    return dequeued;
  } else {
    const secondDequeue = queue.dequeue();
    queue.enqueue(dequeued);
    return secondDequeue;
  }
}
