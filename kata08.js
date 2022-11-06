const repeatNumbers = function(data) {
  let repeatedNumbers = []; // blank array to hold repeated numbers

  for (let i = 0; i < data.length; i++) {
    const numberToRepeat = data[i][0]; // to improve readibility
    const numberOfTimes = data[i][1]; // to improve readibility
    
    let j = 0;
    while (j < numberOfTimes) {
      repeatedNumbers.push(numberToRepeat);
      j++;
    }
    
    // add a comma between the sets of repeated numbers
    if (i < data.length - 1) {
      repeatedNumbers.push(', ');
    }
  }

  // turn the array back into a string
  return repeatedNumbers.join('');
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

// submitted via https://gist.github.com/willsmores/c717cb61fbd74908772ba59d77f509c6