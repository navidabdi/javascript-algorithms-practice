// Beginner Series #4 Cockroach
// DESCRIPTION:
// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

// My Solution
function cockroachSpeed(s) {
  return Math.floor((s * 1000 * 100) / (60 * 60));
}

// One of the other solutions
const cockroachSpeed = (s) => Math.floor(s / 0.036);

// One of the other solutions
function cockroachSpeed(s) {
  const secsInHour = 3600;
  const centimetersInKilometers = 100000;

  return Math.floor((s * centimetersInKilometers) / secsInHour);
}

// One of the other solutions
function cockroachSpeed(s) {
  return Math.floor((s * 100000) / 3600);
}

// One of the other solutions
function cockroachSpeed(s) {
  //multiply km/m by 27.7777777778
  return Math.floor(s * 27.7777777778);
}
