/*

Your job is to find the gravitational force between two spherical objects (obj1 , obj2).

input
Two arrays are given :

arr_val (value array), consists of 3 elements
1st element : mass of obj 1
2nd element : mass of obj 2
3rd element : distance between their centers
arr_unit (unit array), consists of 3 elements
1st element : unit for mass of obj 1
2nd element : unit for mass of obj 2
3rd element : unit for distance between their centers
mass units are :

kilogram (kg)
gram (g)
milligram (mg)
microgram (μg)
pound (lb)
distance units are :

meter (m)
centimeter (cm)
millimeter (mm)
micrometer (μm)
feet (ft)
Note
value of G = 6.67 × 10−11 N⋅kg−2⋅m2

1 ft = 0.3048 m

1 lb = 0.453592 kg

return value must be Newton for force (obviously)

μ copy this from here to use it in your solution

*/

// My Solution 1
solution_S1 = (arr_val, arr_unit) => {
  const G = 6.674 * Math.pow(10, -11);

  let Mess1;
  if (arr_unit[0] == 'g') {
    Mess1 = arr_val[0] / 1000;
  } else if (arr_unit[0] == 'mg') {
    Mess1 = arr_val[0] / 1000 / 1000;
  } else if (arr_unit[0] == 'μg') {
    Mess1 = arr_val[0] / 1000 / 1000 / 1000;
  } else if (arr_unit[0] == 'lb') {
    Mess1 = arr_val[0] / 2.2046;
  } else {
    Mess1 = arr_val[0];
  }
  let Mess2;
  if (arr_unit[1] == 'g') {
    Mess2 = arr_val[1] / 1000;
  } else if (arr_unit[1] == 'mg') {
    Mess2 = arr_val[1] / 1000 / 1000;
  } else if (arr_unit[1] == 'μg') {
    Mess2 = arr_val[1] / 1000 / 1000 / 1000;
  } else if (arr_unit[1] == 'lb') {
    Mess2 = arr_val[1] / 2.2046;
  } else {
    Mess2 = arr_val[1];
  }
  let distance;
  if (arr_unit[2] == 'cm') {
    Mess2 = arr_val[2] / 100;
  } else if (arr_unit[2] == 'mm') {
    Mess2 = arr_val[2] / 1000;
  } else if (arr_unit[2] == 'μm') {
    Mess2 = arr_val[2] / 1000000;
  } else if (arr_unit[2] == 'ft') {
    Mess2 = arr_val[2] * 0.3048;
  } else {
    distance = arr_val[2];
  }
  // console.log(Mess1, Mess2, distance);
  return G * ((Mess1 * Mess2) / Math.pow(distance, 2));
};

// My Solution 2
solution = ([m1, m2, d], [um1, um2, ud]) => {
  const G = 6.67e-11;
  const conversion = {
    kg: 1,
    g: 1e-3,
    mg: 1e-6,
    μg: 1e-9,
    lb: 0.453592,
    m: 1,
    cm: 1e-2,
    mm: 1e-3,
    μm: 1e-6,
    ft: 0.3048,
  };
  return (
    (G * m1 * conversion[um1] * m2 * conversion[um2]) /
    (d * conversion[ud]) ** 2
  );
};
// Test the Solution
console.log(solution([1000, 1000, 100], ['g', 'kg', 'm'])); // => 6.67e-12
console.log(solution([1000, 1000, 100], ['kg', 'kg', 'm'])); // => 6.67e-9

// One of other Solutions
solution_3 = (
  [m, n, r],
  [u1, u2, u3],
  g = {
    kg: 1,
    g: 1e-3,
    mg: 1e-6,
    μg: 1e-9,
    lb: 0.453592,
    m: 1,
    cm: 1e-2,
    mm: 1e-3,
    μm: 1e-6,
    ft: 0.3048,
  }
) => (6.67e-11 * m * g[u1] * n * g[u2]) / (r * g[u3]) ** 2;
// One of other Solutions
const G = 6.67 * 1e-11;

const MASS_MAP = {
  kg: 1,
  g: 1e-3,
  mg: 1e-6,
  μg: 1e-9,
  lb: 0.453592,
};

const DISTANCE_MAP = {
  m: 1,
  cm: 1e-2,
  mm: 1e-3,
  μm: 1e-6,
  ft: 0.3048,
};

const solution = (arr_val, arr_unit) => {
  let [m1, m2, R] = arr_val;
  const [m1Unit, m2Unit, RUnit] = arr_unit;

  m1 = m1 * MASS_MAP[m1Unit];
  m2 = m2 * MASS_MAP[m2Unit];
  R = R * DISTANCE_MAP[RUnit];

  return (G * m1 * m2) / R ** 2;
};
