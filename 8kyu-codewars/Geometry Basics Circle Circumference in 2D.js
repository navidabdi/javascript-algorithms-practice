/*

Geometry Basics: Circle Circumference in 2D

This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x, y attributes. Circle objects have center which is a Point, and radius, which is a number.

Write a function calculating circumference of a Circle.

Tests round answers to 6 decimal places.

*/

// My Solution 1
function circleCircumference(circle) {
  return Number((2 * Math.PI * circle).toFixed(6));
}
// My Solution 2
const circleCircumference = (circle) => 2 * Math.PI * circle.radius;
// Test the Solution

// One of other Solutions
const circleCircumference = (circle) =>
  Math.round(Math.PI * circle.radius * 2e6) / 1e6;
// One of other Solutions
circleCircumference = (R) => +(R.radius * 2 * Math.PI).toFixed(6);
