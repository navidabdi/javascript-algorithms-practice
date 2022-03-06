/*

Your goal is to return multiplication table for number that is always an integer from 1 to 10.

For example, a multiplication table (string) for number == 5 looks like below:

1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
P. S. You can use \n in string to jump to the next line.

Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.

*/
// let test = [0, 1, 2, 3, 45];

// My Solution 1
function multiTable_S1(number) {
  let res = '';
  for (let i = 1; i <= 10; i++) {
    res += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`;
  }
  return res;
}
// My Solution 2
function multiTable(n) {
  return [...Array(10)]
    .map((_, i) => `${i + 1} * ${n} = ${n * i + n}`)
    .join('\n');
}
// Test the Solution
console.log(multiTable(5)); // '1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50'

// One of other Solutions
function multiTable(number) {
  let table = '';
  for (let i = 1; i <= 10; i++) {
    table += `${i} * ${number} = ${i * number}\n`;
  }
  return table.slice(0, -1);
}
// One of other Solutions
const multiTable = (n) =>
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    .map((i) => `${i} * ${n} = ${i * n}`)
    .join('\n');
