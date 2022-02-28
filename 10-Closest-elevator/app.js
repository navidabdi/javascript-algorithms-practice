/*

Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator accepting 3 arguments (in order):

left - The current floor of the left elevator
right - The current floor of the right elevator
call - The floor that called an elevator
It should return the name of the elevator closest to the called floor ("left"/"right").

In the case where both elevators are equally distant from the called floor, choose the elevator to the right.

You can assume that the inputs will always be valid integers between 0-2.

Examples:

elevator(0, 1, 0); // => "left"
elevator(0, 1, 1); // => "right"
elevator(0, 1, 2); // => "right"
elevator(0, 0, 0); // => "right"
elevator(0, 2, 1); // => "right"

*/

// Solution

const elevator = (left, right, call) =>
  Math.abs(call - left) < Math.abs(call - right) ? 'left' : 'right';

// Test the Solution

console.log(elevator(0, 0, 0));
console.log(elevator(1, 0, 0));
console.log(elevator(0, 1, 0));
console.log(elevator(0, 0, 1));
console.log(elevator(0, 1, 1));
console.log(elevator(1, 1, 1));
console.log(elevator(1, 2, 1));
console.log(elevator(1, 2, 2));
console.log(elevator(2, 2, 2));

// One of onother Solutions
function elevator2(left, right, call) {
  if (call === 0)
    if (left < right) return 'left';
    else return 'right';
  else if (call === 1)
    if (left === call && right !== call) return 'left';
    else return 'right';
  else if (call === 2)
    if (left > right) return 'left';
    else return 'right';
  else blowUp(universe); // it's broken
}
