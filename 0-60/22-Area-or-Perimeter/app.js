/*

You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

area_or_perimeter(6, 10) --> 32
area_or_perimeter(3, 3) --> 9
Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

*/

// My Solution 1
const areaOrPerimeter = function (l, w) {
  if (l === w) return w ** 2;
  return 2 * (l + w);
};
// My Solution 2

// Test the Solution
console.log(areaOrPerimeter(4, 4)); //
console.log(areaOrPerimeter(6, 10)); //

// One of other Solutions
const areaOrPerimeter_S2 = function (l, w) {
  return l == w ? l * w : 2 * (l + w);
};
// One of other Solutions
const areaOrPerimeter_S3 = (l, w) => (l - w ? (l + w) * 2 : l ** 2);
