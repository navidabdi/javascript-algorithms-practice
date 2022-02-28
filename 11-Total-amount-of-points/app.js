/*

Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x>y - 3 points
if x<y - 0 point
if x=y - 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4

*/

// Solution 1

function points(games) {
  let totalScore = 0;
  let nietos = [];
  for (let i = 0; i < games.length; i++) {
    nietos.push({ x: games[i].split(':')[0], y: games[i].split(':')[1] });
  }

  for (let i = 0; i < nietos.length; i++) {
    if (nietos[i].x > nietos[i].y) {
      totalScore += 3;
    } else if (nietos[i].x == nietos[i].y) {
      totalScore += 1;
    }
  }
  return totalScore;
}

// Solution 2
function points_S2(games) {
  let totalScore = 0;
  for (let i = 0; i < games.length; i++) {
    if (games[i].split(':')[0] > games[i].split(':')[1]) {
      totalScore += 3;
    } else if (games[i].split(':')[0] == games[i].split(':')[1]) {
      totalScore += 1;
    }
  }
  return totalScore;
}
// Test the Solution

console.log(points(['3:1', '2:2', '0:1', '0:0', '2:1', '1:2', '3:1', '6:0'])); // 3 + 1 + 0 + 1 + 3 + 0 + 3 + 3 = 14

// One Of the other Solutions
const points_S3 = (games) =>
  games.reduce((output, current) => {
    return (output +=
      current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0);
  }, 0);
