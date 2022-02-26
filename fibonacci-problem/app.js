function fib(number) {
  let firstArray = [1, 1];
  let fibSum = 0;
  if (number === 1 || number === 2) return 1;

  for (let i = 0; i < number; i++) {
    firstArray.push(firstArray[i] + firstArray[i + 1]);
    fibSum = firstArray[i + 1];
  }
  return fibSum;
}
