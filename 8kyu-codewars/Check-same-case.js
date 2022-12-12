/**
Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0

Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1

 */

// My Solution
const sameCase = (a, b) => {
    if ((!a.match(/[A-Za-z]/) || !b.match(/[A-Za-z]/))) {
        return -1;
    }
    if ((a.match(/[A-Z]/) && b.match(/[A-Z]/)) || (a.match(/[a-z]/) && b.match(/[a-z]/))) {
        return 1;
    } 
    return 0;
};
console.log(sameCase('W', 'n'));
// One of other Solutions
function sameCase(a, b) {
    if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
       return -1
     }else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
         return 1
     }else{
       return 0
     }
}

// One of other Solutions
function sameCase(a, b) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz'
    if(!alpha.includes(a.toLowerCase()) || !alpha.includes(b.toLowerCase())) return -1
    
    const checkCase = x => {
      if(x === x.toLowerCase()) return 'lower'
      if(x === x.toUpperCase()) return 'upper'
    }
  
    return checkCase(a) === checkCase(b) ? 1 : 0
}