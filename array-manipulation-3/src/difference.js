/* exported difference */

function difference(first, second) {
  var newArr = [];
  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      continue;
    } else {
      newArr.push(first[i]);
    }
  }
  for (let j = 0; j < second.length; j++) {
    if (first.includes(second[j])) {
      continue;
    } else {
      newArr.push(second[j]);
    }
  }

  return newArr;
}
