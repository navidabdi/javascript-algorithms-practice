/*

A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return True if yes, False otherwise :)

*/

// My Solution 1
function hero(bullets, dragons) {
  return bullets / 2 >= dragons;
}
// My Solution 2

// Test the Solution
console.log(hero(10, 5)); // true
console.log(hero(0, 1)); // false
console.log(hero(1500, 751)); // false
console.log(hero(100, 40)); // true
console.log(hero(4, 5)); // false

// One of other Solutions
function hero_S2(bullets, dragons) {
  return bullets >= dragons * 2;
}
// One of other Solutions
function hero_S3(bullets, dragons) {
  var shots = bullets / dragons;
  if (shots < 2) {
    return false;
  } else {
    return true;
  }
}
