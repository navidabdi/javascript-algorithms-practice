function fib(number) {
  let numbers = [1, 1];
  for (let i = 2; i < number + 1; i++) {
    numbers.push(numbers[i - 2] + numbers[i - 1]);
  }
  return numbers[number];
}
