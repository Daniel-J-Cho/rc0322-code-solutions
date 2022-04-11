/* exported calculator */

var calculator = {
  add: function (x, y) {
    var sum;
    sum = x + y;
    return sum;
  },
  subtract: function (x, y) {
    var difference;
    difference = x - y;
    return difference;
  },
  multiply: function (x, y) {
    var product;
    product = x * y;
    return product;
  },
  divide: function (x, y) {
    var quotient;
    quotient = x / y;
    return quotient;
  },
  square: function (x) {
    var squared;
    squared = x * x;
    return squared;
  },
  sumAll: function (numbers) {
    var sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  },
  getAverage: function (numbers) {
    var average = 0;
    var sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    average = sum / numbers.length;
    return average;
  }
};
