function ExampleConstructor() {

}

console.log('value of prototype property:', ExampleConstructor);
console.log('typeof ExampleConstructor:', typeof ExampleConstructor);

var newExample = new ExampleConstructor();
console.log('newExample:', newExample);

var isNewExample = newExample instanceof ExampleConstructor;
console.log('newExample is an instance of ExampleConstructor:', isNewExample);
