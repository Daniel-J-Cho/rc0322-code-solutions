const takeAChance = require('./take-a-chance');

const chance = takeAChance('Daniel');

chance.then(resolve => {
  console.log(resolve);
}).catch(error => {
  console.error(error.message);
});
