let ages = [18, 22, 15];

console.log(ages.some(age => age < 18));  // true (15 is < 18)
console.log(ages.every(age => age >= 15)); // true
