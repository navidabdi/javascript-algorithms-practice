/*

Keep Hydrated!

Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5

*/

// My Solution
function litres(time) {
  return Math.floor(time / 2);
}
// One of other Solutions
function litres(time) {
  return Math.floor(time * 0.5);
}
// One of other Solutions
litres = (t) => ~~(t / 2);
// One of other Solutions
function litres(time) {
  return (time / 2) | 0;
}
// One of other Solutions
function litres(time) {
  return time >> 1;
}
// One of other Solutions
function litres(time) {
  return Math.round(time * 0.5 - 0.5);
}
