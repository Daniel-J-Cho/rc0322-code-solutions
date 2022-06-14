/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let subDequeue = queue.dequeue();
  while (subDequeue > queue.peek()) {
    queue.enqueue(subDequeue);
    subDequeue = queue.dequeue();
  }
  return subDequeue;
}
