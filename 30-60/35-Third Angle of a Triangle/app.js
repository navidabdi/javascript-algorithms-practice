/*

You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.

*/

// My Solution 1
function otherAngle(a, b) {
  return 180 - (a + b);
}
// My Solution 2

// Test the Solution
console.log(otherAngle(30, 60)); // 90

// One of other Solutions
function otherAngle_S2(a, b) {
  if (a < 0 || b < 0)
    //ensure no negative angles
    return 0;
  if (a + b >= 180)
    //ensure 2 angles don't sum up to 180
    return 0;
  return 180 - a - b; //return missing angle
}
// One of other Solutions
function otherAngle_S3(a, b) {
  if (a <= 0 || b <= 0) {
    return 'invalid angle';
  } else {
    return 180 - (a + b);
  }
}
