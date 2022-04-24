/*

Opposites Attract

Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.


*/

// My Solution
function lovefunc(flower1, flower2) {
  return (
    (flower1 % 2 === 0 || flower2 % 2 === 0) &&
    (flower1 % 2 !== 0 || flower2 % 2 !== 0)
  );
}
// One of other Solutions
function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}
// One of other Solutions
function lovefunc(flower1, flower2) {
  return (flower1 + flower2) % 2 === 1;
}
// One of other Solutions
const lovefunc = (Ͼ, Ͽ) => !!((Ͼ & 1) ^ (1 & Ͽ));
// One of other Solutions
function lovefunc(flower1, flower2) {
  return (flower1 + flower2) % 2 == 1;
}
// One of other Solutions
let lovefunc = (f1, f2) => !!((f1 + f2) % 2);
