/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const restOfList = list.next;
  const newNode = new LinkedList(value);
  list.next = newNode;
  list.next.next = restOfList;
}
