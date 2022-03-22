function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResult: ', convertMinutesToSecondsResult);

function greet(name) {
  var greeting = 'Hey,' + ' ' + name;
  return greeting;
}

var greetResult = greet('Butthead');
console.log('greetResult: ', greetResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var getAreaResult = getArea(5, 10);
console.log('getAreaResult:', getAreaResult);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

var getFirstNameResult = getFirstName({ firstName: 'Daniel', lastName: 'Cho' });
console.log('getFirstNameResult:', getFirstNameResult);

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}

var getLastElementResult = getLastElement([1, 2, 3, 4, 5]);
console.log('getLastElementResult:', getLastElementResult);
