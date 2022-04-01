var newArr = [
  {
    isbn: '006117758X',
    title: 'Ham on Rye',
    author: 'Charles Bukowski'
  },
  {
    isbn: '0142410365',
    title: 'James and the Giant Peach',
    author: 'Roald Dahl'
  },
  {
    isbn: '1476730407',
    title: 'The Disaster Artist: My Life Inside The Room the Greatest Bad Movie Ever Made',
    author: 'Greg Sestero'
  }
];

console.log('Array of books: ', newArr);
console.log('typeof: ', typeof newArr);

var jsonArr = JSON.stringify(newArr);
console.log('JSON stringification of newArr:', jsonArr);
console.log('type of jsonArr:', typeof jsonArr);

var newStr = '{"numberId": "01475539", "name": "Daniel Cho"}';
console.log('String of Student:', newStr);
console.log('type of newStr:', typeof newStr);

var jsonObj = JSON.parse(newStr);
console.log('JSON Object:', jsonObj);
console.log('type of jsonObj:', typeof jsonObj);
