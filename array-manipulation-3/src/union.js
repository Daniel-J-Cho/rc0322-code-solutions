/* exported union */

function union(first, second) {
  var newArr = [];
  for (let i = 0; i < first.length; i++) {
    newArr.push(first[i]);
  }

  for (let i = 0; i < second.length; i++) {
    if (first.includes(second[i])) {
      continue;
    } else {
      newArr.push(second[i]);
    }
  }
  return newArr;
}
