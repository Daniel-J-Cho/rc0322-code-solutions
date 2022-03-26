/* exported chunk */

function chunk(array, size) {
  const mainArray = [];
  for (let i = 0; i < array.length; i += size) {
    const subArray = array.slice(i, i + size);
    mainArray.push(subArray);
    if (size === 0) {
      break;
    }
  }
  return mainArray;
}
