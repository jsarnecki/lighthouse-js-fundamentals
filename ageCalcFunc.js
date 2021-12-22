const ageCalculator = function(name, birthYear, currentYear){
  let age = currentYear - birthYear;
  return `${name} is ${age} years old.`;
};

console.log(ageCalculator("Guy", 1969, 2021));