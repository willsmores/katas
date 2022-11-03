const numberOfVowels = function(data) {
  // set initial count
  let count = 0;
  // protect against uppercase characters
  const newString = data.toLowerCase();
  
  // loop through string
  for (let i = 0; i <= newString.length; i++) {
    if ((newString[i] === 'a') || (newString[i] === 'e') || (newString[i] === 'i') || (newString[i] === 'o') || (newString[i] === 'u')) {
      count++; // increment count by 1
    }
  };
  // return total
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

// submitted via https://gist.github.com/willsmores/cda5b4762c8fb96f7d2f50458e34ea83