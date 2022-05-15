/*

Grasshopper - Personalized Message

Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'

*/

// My Solution
function greet(name, owner) {
  return name === owner ? 'Hello boss' : 'Hello guest';
}
// One of other Solutions
function greet(name, owner) {
  return `Hello ${name == owner ? 'boss' : 'guest'}`;
}
// One of other Solutions
function greet(name, owner) {
  if (name === owner) {
    return 'Hello boss';
  }
  return 'Hello guest';
}
// One of other Solutions

// One of other Solutions

// One of other Solutions
