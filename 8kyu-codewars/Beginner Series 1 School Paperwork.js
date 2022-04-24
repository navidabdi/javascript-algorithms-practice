/*

Beginner Series #1 School Paperwork

Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

Example:
n= 5, m=5: 25
n=-5, m=5:  0
Waiting for translations and Feedback! Thanks!

*/

// My Solution
function paperwork(n, m) {
  return n < 0 || m < 0 ? 0 : n * m;
}
// One of other Solutions
function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0;
}
// One of other Solutions
const paperwork = (n, m) => Math.max(0, n) * Math.max(0, m);
// One of other Solutions

// One of other Solutions

// One of other Solutions
v;
