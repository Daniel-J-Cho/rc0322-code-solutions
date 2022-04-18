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
    } else if (spltStr[i] === 'javascript:' && spltStr[i + 1] === 'the') {
      spltStr[i] = spltStr[i].charAt(0).toUpperCase() + spltStr[i].slice(1, 4) +
      spltStr[i].charAt(4).toUpperCase() + spltStr[i].slice(5);
      spltStr[i + 1] = spltStr[i + 1].charAt(0).toUpperCase() + spltStr[i + 1].slice(1);
    } else if (spltStr[i] === 'javascript:' && spltStr[i + 1] === 'an') {
      spltStr[i] = spltStr[i].charAt(0).toUpperCase() + spltStr[i].slice(1, 4) +
      spltStr[i].charAt(4).toUpperCase() + spltStr[i].slice(5);
      spltStr[i + 1] = spltStr[i + 1].charAt(0).toUpperCase() + spltStr[i + 1].slice(1);
    } else if (spltStr[i] === 'programmer:' && spltStr[i + 1] === 'the') {
      spltStr[i] = spltStr[i].charAt(0).toUpperCase() + spltStr[i].slice(1);
      spltStr[i + 1] = spltStr[i + 1].charAt(0).toUpperCase() + spltStr[i + 1].slice(1);
    } else if (spltStr[i] === 'in-depth') {
      spltStr[i] = spltStr[i].charAt(0).toUpperCase() + spltStr[i].slice(1, 3) +
      spltStr[i].charAt(3).toUpperCase() + spltStr[i].slice(4);
    } else if (spltStr[i] === 'self-taught') {
      spltStr[i] = spltStr[i].charAt(0).toUpperCase() + spltStr[i].slice(1, 5) +
      spltStr[i].charAt(5).toUpperCase() + spltStr[i].slice(6);
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
