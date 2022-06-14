/* exported takeSmaller */

function takeSmaller(queue) {
  if (queue.peek() === undefined) {
    return undefined;
  }
  const dequeued = queue.dequeue();
  if (queue.peek() === undefined) {
    return dequeued;
  } else {
    if (dequeued < queue.peek()) {
      const secondDequeue = queue.dequeue();
      queue.enqueue(secondDequeue);
      return dequeued;
    } else if (dequeued === queue.peek()) {
      const secondDequeue = queue.dequeue();
      queue.enqueue(secondDequeue);
      return dequeued;
    } else if (dequeued > queue.peek()) {
      const secondDequeue = queue.dequeue();
      queue.enqueue(dequeued);
      return secondDequeue;
    }
  }
}
