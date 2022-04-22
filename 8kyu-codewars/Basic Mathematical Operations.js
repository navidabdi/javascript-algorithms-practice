/*

Basic Mathematical Operations

Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7

*/

// My Solution
function basicOp(operation, value1, value2) {
  switch (operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
    default:
      return;
  }
}
// One of other Solutions
function basicOp(o, a, b) {
  return eval(a + o + b);
}
// One of other Solutions
function basicOp(operation, value1, value2) {
  var cases = {
    '+': value1 + value2,
    '-': value1 - value2,
    '*': value1 * value2,
    '/': value1 / value2,
  };
  return cases[operation];
}
// One of other Solutions
function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2);
}
// One of other Solutions
const basicOperations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

const basicOp = (op, x, y) => basicOperations[op](x, y);
// One of other Solutions
basicOp = (operation, value1, value2) =>
  eval(`${value1} ${operation} ${value2}`);
