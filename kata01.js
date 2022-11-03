const sumLargestNumbers = function(data) {
  // set initial largest numbers
  let firstLargest = 0;
  let secondLargest = 0;
  
  for (let i = 0; i <= data.length; i++) {  
    if (firstLargest < data[i]) { // we found a larger number!
      secondLargest = firstLargest; // set second to previous largest
      firstLargest = data[i]; // set the first to the newly found larger number
    }
  }
  return firstLargest + secondLargest; // return sum
  // console.log(data)
  // console.log(firstLargest);
  // console.log(secondLargest);
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

// submitted via https://gist.github.com/willsmores/ab03e36fcc93c2ef495dc4a6f28fac2e