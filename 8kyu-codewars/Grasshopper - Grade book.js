/*

Grasshopper - Grade book

Grade book
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

*/

// My Solution
function getGrade(s1, s2, s3) {
  const score = (s1 + s2 + s3) / 3;
  if (90 <= score && score <= 100) return 'A';
  if (80 <= score && score < 90) return 'B';
  if (70 <= score && score < 80) return 'C';
  if (60 <= score && score < 70) return 'D';
  if (0 <= score && score < 60) return 'F';
}
// One of the other Solutions
function getGrade(s1, s2, s3) {
  avg = (s1 + s2 + s3) / 3;
  if (avg < 60) return 'F';
  else if (avg < 70) return 'D';
  else if (avg < 80) return 'C';
  else if (avg < 90) return 'B';
  else return 'A';
}
// One of the other Solutions
function getGrade(s1, s2, s3) {
  var s = (s1 + s2 + s3) / 3;
  return s >= 90 ? 'A' : s >= 80 ? 'B' : s >= 70 ? 'C' : s >= 60 ? 'D' : 'F';
}
// One of the other Solutions
function getGrade(s1, s2, s3) {
  var avg = (s1 + s2 + s3) / 3;
  switch (true) {
    case avg >= 90:
      return 'A';
    case avg >= 80:
      return 'B';
    case avg >= 70:
      return 'C';
    case avg >= 60:
      return 'D';
    default:
      return 'F';
  }
}
// One of the other Solutions
// One of the other Solutions
