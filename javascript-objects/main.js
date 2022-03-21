var student = {
  firstName: 'Daniel',
  lastName: 'Cho',
  age: 38
};

var fullName;
fullName = student.firstName + ' ' + student.lastName;
console.log('Full name: ', fullName);
console.log('typeof fullName: ', typeof fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Real Estate Agent';

console.log('Irvine resident?: ', student.livesInIrvine);
console.log('typeof livesInIrvine: ', typeof student.livesInIrvine);

console.log('Previous occupation: ', student.previousOccupation);
console.log('typeof previousOccupation: ', typeof student.previousOccupation);

var vehicle = {
  make: 'Porsche',
  model: '911 Carrera',
  year: 2022
};

vehicle['color'] = 'Black';
vehicle['isConvertible'] = false;

console.log('The color of the vehicle is: ', vehicle['color']);
console.log('typeof vehicle[\'color\']:', typeof vehicle['color']);
console.log('Is the vehicle a convertible?:', vehicle['isConvertible']);
console.log('typeof vehicle[\'isConvertible\']:', typeof vehicle['isConvertible']);

console.log('vehicle object: ', vehicle);

var pet = {
  name: 'Airbud',
  type: 'Golden Retriever'
};

delete pet.name;
delete pet.type;
console.log(pet);
