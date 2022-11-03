const conditionalSum = function(values, condition) {
  let sum = 0;

  switch (condition) {
  case 'even':
    for (let i = 0; i <= values.length; i++) {
      // check value is even
      if (values[i] % 2 === 0) {
        sum += values[i]; // add matching value to sum
      }
    }
    break;
  case 'odd':
    for (let i = 0; i <= values.length; i++) {
      // check value is odd
      if (values[i] % 2 > 0) {
        sum += values[i]; // add matching value to sum
      }
    }
    break;
  default:
    return 'Please enter a valid condition (odd / even).'
  }

  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

// submitted via https://gist.github.com/willsmores/a19f306fc1b1942cbe22caf3b0b864a2