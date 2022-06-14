// List Filtering

// DESCRIPTION:
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// My Solution
function filter_list(lists) {
  return lists.filter((list) => typeof list === 'number');
}

// Some of the other solutions
function filter_list(l) {
  return l.filter(function (v) {
    return typeof v == 'number';
  });
}

function filter_list(l) {
  return l.filter((v) => typeof v == 'number');
}

function filter_list(l) {
  return l.filter((e) => Number.isInteger(e));
}

function filter_list(l) {
  return l.filter(Number.isInteger);
}
