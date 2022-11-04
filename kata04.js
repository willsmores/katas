const instructorWithLongestName = function(instructors) {
  let characterCount = 0;
  let longestNameObj = {};
  
  // tried out a for/of loop for this one
  for (const instructor of instructors) {
    const insName = instructor.name; // easier access to name key

    if (characterCount < insName.length) {
      characterCount = insName.length; // set new longest name length
      longestNameObj = instructor; // set object associated with this name
    }
  }
  
  return longestNameObj;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

// submitted via https://gist.github.com/willsmores/65664338e814b2016ea92d9aace09606