/*

Kata Task
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that

*/

// My Solution 1
const humanYearsCatYearsDogYears = (humanYears) => {
  let catYears = 0;
  let dogYears = 0;
  if (humanYears === 1) {
    catYears = catYears + 15;
    dogYears = dogYears + 15;
    return [humanYears, catYears, dogYears];
  }
  if (humanYears === 2) {
    catYears = catYears + 15 + 9;
    dogYears = dogYears + 15 + 9;
    return [humanYears, catYears, dogYears];
  }
  for (let i = 2; i < humanYears; i++) {
    catYears = catYears + 4;
    dogYears = dogYears + 5;
  }
  return [humanYears, catYears + 15 + 9, dogYears + 15 + 9];
};
// My Solution 2

// Test the Solution
console.log(humanYearsCatYearsDogYears(1)); // [1,15,15]
console.log(humanYearsCatYearsDogYears(2)); // [2,24,24]
console.log(humanYearsCatYearsDogYears(10)); // [10,56,64]
console.log(humanYearsCatYearsDogYears(14)); // [14,72,84]

// One of other Solutions
var humanYearsCatYearsDogYears_S2 = function (y) {
  if (y == 1) return [1, 15, 15];
  if (y == 2) return [2, 24, 24];
  return [y, (y - 2) * 4 + 24, (y - 2) * 5 + 24];
};
// One of other Solutions How Complicated :)
const humanYearsCatYearsDogYears_S3 = (humanYears) => [
  humanYears,
  (humanYears - 1 ? 16 : 11) + 4 * humanYears,
  (humanYears - 1 ? 14 : 10) + 5 * humanYears,
];
