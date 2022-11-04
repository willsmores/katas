const checkAir = function (samples, threshold) {
  
  let cleanCount = 0;
  let dirtyCount = 0;
  
  for (const sample of samples) {
    if (sample === 'clean') {
      cleanCount++;
    } else if (sample === 'dirty') {
      dirtyCount++;
    } else {
      return 'Please enter a valid sample condition.'
    }
  };
  
  const dirtyProportion = dirtyCount / cleanCount;
  
  if (threshold < dirtyProportion) {
    return 'Polluted';
  } else {
    return 'Clean'
  };
  
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))

// submitted via https://gist.github.com/willsmores/5d799811dccd8e4afe8827ba53bad5aa