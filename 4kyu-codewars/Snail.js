/*

Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
This image will illustrate things more clearly:


NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

*/

// My Solution
function snail(array) {
  if (array.length === 1) {
    return array[0];
  } else if (array.length === 0) {
    return [];
  } else {
    const sorted = [];
    sorted.push(...array.shift());

    for (let i = 0; i < array.length - 1; i++) {
      sorted.push(array[i].pop());
    }

    sorted.push(...array.pop().reverse());
    for (let i = array.length - 1; i >= 0; i--) {
      sorted.push(array[i].shift());
    }

    sorted.push(...snail(array));
    return sorted;
  }
}
// One of other Solutions
snail = function (array) {
  var result;
  while (array.length) {
    // Steal the first row.
    result = result ? result.concat(array.shift()) : array.shift();
    // Steal the right items.
    for (var i = 0; i < array.length; i++) result.push(array[i].pop());
    // Steal the bottom row.
    result = result.concat((array.pop() || []).reverse());
    // Steal the left items.
    for (var i = array.length - 1; i >= 0; i--) result.push(array[i].shift());
  }
  return result;
};
// One of other Solutions
function snail(array) {
  var vector = [];
  while (array.length) {
    vector.push(...array.shift());
    array.map((row) => vector.push(row.pop()));
    array.reverse().map((row) => row.reverse());
  }
  return vector;
}
// One of other Solutions
snail = function (array) {
  var size = array.length;

  if (size == 0) return [];

  if (size == 1) return array[0];

  var top = array[0].slice(0, -1);
  var right = array.slice(0, -1).map((a) => a[size - 1]);
  var bottom = array[size - 1].slice(1).reverse();
  var left = array
    .slice(1)
    .map((a) => a[0])
    .reverse();
  var inner = array.slice(1, -1).map((a) => a.slice(1, -1));

  return [].concat(top, right, bottom, left, snail(inner));
};
// One of other Solutions
snail = function (array) {
  var maxx = array[0].length,
    maxy = maxx,
    minx = -1,
    miny = 0,
    x = 0,
    y = 0,
    result = [],
    dir = 'r';

  for (var i = maxx * maxx; i > 0; i--) {
    result.push(array[y][x]);
    switch (dir) {
      case 'u':
        y--;
        break;
      case 'l':
        x--;
        break;
      case 'd':
        y++;
        break;
      case 'r':
        x++;
        break;
    }
    if (x == maxx - 1 && y == miny) {
      dir = 'd';
      minx++;
    } else if (x == maxx - 1 && y == maxy - 1) {
      dir = 'l';
      miny++;
    } else if (x == minx && y == maxy - 1) {
      dir = 'u';
      maxx--;
    } else if (x == minx && y == miny) {
      dir = 'r';
      maxy--;
    }
  }
  return result;
};
// One of other Solutions
function snail(array) {
  var results = [];

  while (array.length > 0) {
    results = results.concat(array.shift());

    array.forEach(function (current) {
      results.push(current.pop());
    });

    array.forEach(function (current) {
      current.reverse();
    });

    array.reverse();
  }

  return results;
}

// One of other Solutions
const snail = function (array) {
  const list = [];

  while (array.length) {
    list.push(...array.shift(), ...array.map((row) => row.pop()));

    array.reverse().map((row) => row.reverse());
  }

  return list;
};
