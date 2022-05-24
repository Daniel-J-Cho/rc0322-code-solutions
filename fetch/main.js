fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'GET'
})
  .then(response => response.json())
  .then(result => {
    console.log('users:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  });
