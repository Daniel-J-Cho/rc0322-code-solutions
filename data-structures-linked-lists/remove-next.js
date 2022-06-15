/* exported removeNext */

function removeNext(list) {
  if (list.next === null) {
    return list;
  }
  const third = list.next.next;
  list.next = third;
}
