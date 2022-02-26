function isPrime(number) {
  const numArray = [];
  for (let i = 1; i < number + 1; i++) {
    if (number % i === 0) numArray.push(i);
  }
  if (numArray.length > 2) {
    return false;
  } else {
    return true;
  }
}
