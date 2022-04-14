/* exported titleCase */

function titleCase(title) {
  var spltStr = title.toLowerCase().split(' ');
  for (var i = 0; i < spltStr.length; i++) {
    if (spltStr[i] === 'and' || spltStr[i] === 'or' || spltStr[i] === 'nor' || spltStr[i] === 'but') {
      continue;
    } else if (spltStr[0] === 'the') {
      spltStr[i] = spltStr[i].charAt(0).toUpperCase() + spltStr[i].slice(1);
    } else if (spltStr[0] === 'an') {
      spltStr[i] = spltStr[i].charAt(0).toUpperCase() + spltStr[i].slice(1);
    } else if (spltStr[i] === ': the') {
      spltStr[i] = spltStr[i].charAt(2).toUpperCase() + spltStr[i].slice(3);
    } else if (spltStr[i] === 'a' || spltStr[i] === 'an' || spltStr[i] === 'the') {
      continue;
    } else if (spltStr[i] === 'as' || spltStr[i] === 'at' || spltStr[i] === 'by') {
      continue;
    } else if (spltStr[i] === 'for' || spltStr[i] === 'in' || spltStr[i] === 'of') {
      continue;
    } else if (spltStr[i] === 'on' || spltStr[i] === 'per' || spltStr[i] === 'to') {
      continue;
    } else if (spltStr[i] === 'javascript') {
      spltStr[i] = spltStr[i].charAt(0).toUpperCase() + spltStr[i].slice(1, 4) +
      spltStr[i].charAt(4).toUpperCase() + spltStr[i].slice(5);
    } else if (spltStr[i] === 'api') {
      spltStr[i] = spltStr[i].toUpperCase();
    } else {
      spltStr[i] = spltStr[i].charAt(0).toUpperCase() + spltStr[i].slice(1);
    }
  }
  return spltStr.join(' ');
}
