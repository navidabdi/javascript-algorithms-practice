/*

Now we will confect a reagent. There are eight materials to choose from, numbered 1,2,..., 8 respectively.

We know the rules of confect:

material1 and material2 cannot be selected at the same time
material3 and material4 cannot be selected at the same time
material5 and material6 must be selected at the same time
material7 or  material8 must be selected(at least one, or both)
Task
You are given a integer array formula. Array contains only digits 1-8 that represents material 1-8. Your task is to determine if the formula is valid. Returns true if it's valid, false otherwise.

Example
For formula = [1,3,7], The output should be true.

For formula = [7,1,2,3], The output should be false.

For formula = [1,3,5,7], The output should be false.

For formula = [1,5,6,7,3], The output should be true.

For formula = [5,6,7], The output should be true.

For formula = [5,6,7,8], The output should be true.

For formula = [6,7,8], The output should be false.

For formula = [7,8], The output should be true.

Note
All inputs are valid. Array contains at least 1 digit. Each digit appears at most once.

Happy Coding ^_^

*/

// My Solution 1

// My Solution 2
isValid = (a) =>
  !(a.includes(1) && a.includes(2)) &&
  !(a.includes(3) && a.includes(4)) &&
  a.includes(5) === a.includes(6) &&
  (a.includes(7) || a.includes(8));

// Test the Solution
console.log(isValid([1, 3, 7])); // true
console.log(isValid([7, 1, 2, 3])); // false
console.log(isValid([1, 3, 5, 7])); // false
console.log(isValid([1, 5, 6, 7, 3])); // true
console.log(isValid([3, 4, 6, 7, 3])); // false
console.log(isValid([4, 3, 8, 5, 6, 1, 7, 2])); // false
console.log(isValid([6, 8, 5, 3])); // true
console.log(isValid([8, 3])); // true
console.log(isValid([7, 6, 4, 5])); // true

// One of other Solutions
function isValid(formula) {
  const cannot = (a, b) => {
    const containsA = formula.includes(a);
    const containsB = formula.includes(b);
    return containsA !== containsB || !containsA;
  };
  const must = (a, b) => formula.includes(a) === formula.includes(b);

  const any = (a, b) => formula.includes(a) || formula.includes(b);

  return cannot(1, 2) && cannot(3, 4) && must(5, 6) && any(7, 8);
}
// One of other Solutions
function isValid(formula) {
  const has = formula.includes.bind(formula);

  return has(1) && has(2)
    ? false
    : has(3) && has(4)
    ? false
    : has(5) ^ has(6)
    ? false
    : !has(7) && !has(8)
    ? false
    : true;
}

// One of other Solutions
let isValid = (formula) => {
  if (formula.includes(1) && formula.includes(2)) {
    return false;
  }
  if (formula.includes(3) && formula.includes(4)) {
    return false;
  }
  if (
    (formula.includes(5) && !formula.includes(6)) ||
    (!formula.includes(5) && formula.includes(6))
  ) {
    return false;
  }
  if (!formula.includes(7) && !formula.includes(8)) {
    return false;
  }
  return true;
};
