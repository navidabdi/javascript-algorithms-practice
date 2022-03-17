// Calculate the factorial of a number

// Examples:
// fact(3) => 3 * 2 * 1 = 6
// fact(5) => 5 * 4 * 3 * 2 * 1 = 120

// First Solution that comes to my mind:
function fact(number) {
  let factorial = 1;
  for (let i = 2; i <= number; i++) {
    factorial = factorial * i;
  }
  return factorial;
}

// Test the fact Algorithm
console.log('Test the fact Algorithm');
console.log(fact(0));
console.log(fact(3));
console.log(fact(5));

// The Better Solution
// Calculation of Factorial. The factorial of n is denoted by n! and calculated by the integer numbers from 1 to n. The formula for n factorial is n! =n×(n−1)!

function factorialize(num) {
  // If the number is less than 0, reject it.
  if (num < 0) return -1;
  // If the number is 0, its factorial is 1.
  else if (num == 0) return 1;
  // Otherwise, call the recursive procedure again
  else {
    return num * factorialize(num - 1);
    /* 
        First Part of the recursion method
        You need to remember that you won’t have just one call, you’ll have several nested calls
        
        Each call: num === "?"        	         num * factorialize(num - 1)
        1st call – factorialize(5) will return    5  * factorialize(5 - 1) // factorialize(4)
        2nd call – factorialize(4) will return    4  * factorialize(4 - 1) // factorialize(3)
        3rd call – factorialize(3) will return    3  * factorialize(3 - 1) // factorialize(2)
        4th call – factorialize(2) will return    2  * factorialize(2 - 1) // factorialize(1)
        5th call – factorialize(1) will return    1  * factorialize(1 - 1) // factorialize(0)
        
        Second part of the recursion method
        The method hits the if condition, it returns 1 which num will multiply itself with
        The function will exit with the total value
        
        5th call will return (5 * (5 - 1))     // num = 5 * 4
        4th call will return (20 * (4 - 1))    // num = 20 * 3
        3rd call will return (60 * (3 - 1))    // num = 60 * 2
        2nd call will return (120 * (2 - 1))   // num = 120 * 1
        1st call will return (120)             // num = 120
        
        If we sum up all the calls in one line, we have
        (5 * (5 - 1) * (4 - 1) * (3 - 1) * (2 - 1)) = 5 * 4 * 3 * 2 * 1 = 120
        */
  }
}

// Test the factorialize Algorithm
console.log('Test the factorialize');
console.log(factorialize(0));
console.log(factorialize(3));
console.log(factorialize(5));
