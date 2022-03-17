/*

A western man is trying to find gold in a river. To do that, he passes a bucket through the river's soil and then checks if it contains any gold. However, he could be more productive if he wrote an algorithm to do the job for him.

So, you need to check if there is gold in the bucket, and if so, return True/true. If not, return False/false.

*/

// My Solution 1
function checkTheBucket(bucket) {
  return bucket.includes('gold');
}
// My Solution 2

// Test the Solution
console.log(checkTheBucket(['stone', 'stone', 'stone', 'stone', 'stone'])); //  false
console.log(checkTheBucket(['stone', 'stone', 'stone', 'stone', 'gold'])); //  true

// One of other Solutions
function checkTheBucket(bucket) {
  if (!bucket) return false;
  let x = bucket[0];

  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i] != x) {
      return true;
    }
  }

  return false;
}
// One of other Solutions
const checkTheBucket = (b) => b.indexOf('gold') != -1;
