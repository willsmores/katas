const urlEncode = function(text) {
  let stringArray = []; // array to hold string characters
  
  // transfer (immutable) string to array
  for (const character of text) {
    stringArray.push(character);
  };
  
  // remove whitespace at start of string
  for (let i = 0; i <= stringArray.length; i++) {   
    if (stringArray[i] === ' ') {
      stringArray.splice(i, 1, '');
    } else {
      break; // exits loop on !whitespace
    }
  };
  
  // remove whitespace at end of string
  for (let i = stringArray.length - 1; i >= 0; i--) {   
    if (stringArray[i] === ' ') {
      stringArray.splice(i, 1, '');
    } else {
      break; // exits loop on !whitespace
    }
  };
  
  // replace all remaining whitespace
  for (let i = 0; i <= stringArray.length; i++) {   
    if (stringArray[i] === ' ') {
      stringArray[i] = '%20';
    }
  };
  
  // transfer array back into string
  return stringArray.join('');
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("    Lighthouse Labs    "));
console.log(urlEncode("blue is greener than purple for sure"));

// submitted via https://gist.github.com/willsmores/9ddd29866287c946b828fb84769bf555