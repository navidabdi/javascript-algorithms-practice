/*

There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

number of pillars (≥ 1);
distance between pillars (10 - 30 meters);
width of the pillar (10 - 50 centimeters).
Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

*/

// My Solution
function pillars(num_pill, dist, width) {
  if (num_pill === 1) return 0;

  return (num_pill - 1) * dist * 100 + (num_pill - 2) * width;
}

// Test the Solution
console.log(pillars(1, 10, 10));
console.log(pillars(2, 20, 25));
console.log(pillars(11, 15, 30));

//  || + || + || + || + || + || + || + || + || + || + ||

// One of other Solutions
function pillars_S2(num_pill, dist, width) {
  // your code here
  return num_pill > 1
    ? (num_pill - 1) * dist * 100 + (num_pill - 2) * width
    : 0;
}
