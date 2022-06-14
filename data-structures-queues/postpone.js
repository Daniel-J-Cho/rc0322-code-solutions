/* exported postpone */

function postpone(queue) {
  if (queue.peek() === undefined) {
    return queue;
  } else {
    const dequeued = queue.dequeue();
    queue.enqueue(dequeued);
  }
}
