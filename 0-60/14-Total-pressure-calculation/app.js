/*

Given the molecular mass of two molecules M1M_1M1 and M2M_2M2, their masses present m1m_1m1 and m2m_2m2 in a vessel of volume VVV at a specific temperature TTT, find the total pressure PtotalP_{total}P total exerted by the molecules.

Given the moleculer mass of two molecules ( M1 and M2 ), their masses present ( m1 and m2 ) in a vessel of volume ( V ) at a specific temperature ( T ). Find the total pressure exerted by the molecules ( Ptotal ) .
input
Six values :
m1
m2
M1
M2
V
T
output
One value :
Ptotal
notes
Units for each of the following are given as under :
m1 = gram
m2 = gram
M1 = gram.mole-1
M2 = gram.mole-1
V = dm3
T = Celcius
Ptotal = atmpspheric pressure (atm)
Remember : Temperature is given in Celcius while SI unit is Kelvin (K)
0 Celcius = 273.15Kelvin
The gas constant (R) has value of 0.082dm3.atm.K-1.mol-1

*/

// My Solution
function solution(M1, M2, m1, m2, V, T) {
  M1 = (m1 * 0.001) / M1;
  M2 = (m2 * 0.001) / M2;
  T = T + 273.15;
  const R = 0.082;

  return (((M1 + M2) * R * T) / V) * 1000;
}

// Test the Solution
console.log(solution(44, 30, 3, 2, 5, 50));
console.log(solution(60, 20, 10, 30, 10, 100));

// One of other Solutions :) How Complicated !
solution_2 = (m1, m2, M1, M2, v, t) =>
  ((M1 / m1 + M2 / m2) * 0.082 * (t + 273.15)) / v;
