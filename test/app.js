// My Solution 1
const findSmallestInt_S1 = (args) => {
  args.sort(function (a, b) {
    return a - b;
  });
  return args[0];
};

// My Solution 2
const findSmallestInt_S2 = (args) => {
  let small = 0;
  for (let i = 0; i < args.length; i++) {
    if (args[0] > args[i]) {
      small = args[i];
    } else {
      small = args[0];
    }
  }
  return small;
};
// My Solution 3
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}
// Test the Solution
console.log(findSmallestInt([78, 56, 232, 12, 8])); // 8
