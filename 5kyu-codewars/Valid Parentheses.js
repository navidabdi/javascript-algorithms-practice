/*

Valid Parentheses

Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100

*/

// My Solution 1
function validParentheses(parens) {
  let stack = [];
  let map = {
    '(': ')',
  };

  for (var s of parens) {
    if (s === '(') {
      stack.push(s);
    } else {
      let last = stack.pop();
      if (s !== map[last]) {
        return false;
      }
    }
  }

  if (stack.length !== 0) {
    return false;
  }
  return true;
}

// One of other Solutions
function validParentheses(parens) {
  var n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++;
    if (parens[i] == ')') n--;
    if (n < 0) return false;
  }

  return n == 0;
}
// One of other Solutions
function validParentheses(parens) {
  var indent = 0;

  for (var i = 0; i < parens.length && indent >= 0; i++) {
    indent += parens[i] == '(' ? 1 : -1;
  }

  return indent == 0;
}
// One of other Solutions
function validParentheses(parens) {
  var re = /\(\)/;
  while (re.test(parens)) parens = parens.replace(re, '');
  return !parens;
}
// One of other Solutions
function validParentheses(parens) {
  while (parens.indexOf('()') != -1) {
    parens = parens.replace('()', '');
  }
  return !parens.length;
}
// One of other Solutions
function validParentheses(parens) {
  var stack = [],
    i;

  for (i = 0; i < parens.length; i++) {
    if (parens[i] === '(') {
      stack.push(parens[i]);
    } else if ('(' !== stack.pop()) {
      return false;
    }
  }

  return stack.length === 0;
}
