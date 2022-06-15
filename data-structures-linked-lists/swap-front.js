/* exported swapFront */

function swapFront(list) {
  if (list.next === null) {
    return list;
  }
  const temp = list.next.data;
  list.next.data = list.data;
  list.data = temp;
  return list;
}
