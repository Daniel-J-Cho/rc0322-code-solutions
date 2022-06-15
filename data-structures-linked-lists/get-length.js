/* exported getLength */

function getLength(list) {
  let count = 1;
  let current = list.next;
  while (current !== null) {
    current = current.next;
    count++;
  }
  return count;
}
