/*

Your function takes two arguments:
current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

*/

// My Solution

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2);
}

// Test the Solution
console.log(twiceAsOld(36, 7));
console.log(twiceAsOld(55, 30));
console.log(twiceAsOld(42, 21));
console.log(twiceAsOld(18, 2));

// One of other Solutions :) How Complicated !
function twiceAsOld(dadYearsOld, sonYearsOld) {
  var count = 0;
  if (dadYearsOld >= sonYearsOld * 2)
    while (dadYearsOld + count > (sonYearsOld + count) * 2) count++;
  else while (dadYearsOld - count < (sonYearsOld - count) * 2) count++;
  return count;
}
