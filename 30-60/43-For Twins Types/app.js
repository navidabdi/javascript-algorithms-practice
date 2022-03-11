/*

Prolog:
This kata series was created for friends of mine who just started to learn programming. Wish you all the best and keep your mind open and sharp!

Task:
Write function typeValidation that will accept two parameters: variable and type and check if type of variable is matching type. Return true if types match or false if not.

Examples:
typeValidation(42, "number");   // => true
typeValidation("42", "number"); // => false

*/

// My Solution 1
function typeValidation(variable, type) {
  return typeof variable === type;
}
// My Solution 2

// Test the Solution
console.log(typeValidation(42, 'number')); // true
console.log(typeValidation('42', 'number')); // false

// One of other Solutions
function typeValidation(variable, type) {
  if (typeof variable === 'number' && type === 'number') {
    return true;
  } else if (typeof variable === 'undefined' && type === 'undefined') {
    return true;
  } else if (typeof variable === 'string' && type === 'string') {
    return true;
  } else if (typeof variable === 'boolean' && type === 'boolean') {
    return true;
  } else if (typeof variable === 'object' && type === 'object') {
    return true;
  }
  return false;
}
// One of other Solutions
