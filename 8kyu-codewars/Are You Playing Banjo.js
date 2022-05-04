/*

Are You Playing Banjo?

Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.

*/

// My Solution
function areYouPlayingBanjo(name) {
  return name.toLowerCase()[0] === 'r'
    ? name + ' plays banjo'
    : name + ' does not play banjo';
}
// One of other Solutions
function areYouPlayingBanjo(name) {
  return (
    name +
    (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') +
    ' banjo'
  );
}
// One of other Solutions
function areYouPlayingBanjo(name) {
  return name + (/^r/i.test(name) ? ' plays ' : ' does not play ') + 'banjo';
}
// One of other Solutions

// One of other Solutions

// One of other Solutions
