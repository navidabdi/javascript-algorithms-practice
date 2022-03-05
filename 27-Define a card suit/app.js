/*

You get any card as an argument. Your task is to return a suit of this card.

Our deck (is preloaded):

deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
        '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
        '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
        '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];
('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'

*/

// My Solution 1
function defineSuit(card) {
  if (card[card.length - 1] === '♣') return 'clubs';
  if (card[card.length - 1] === '♦') return 'diamonds';
  if (card[card.length - 1] === '♥') return 'hearts';
  if (card[card.length - 1] === '♠') return 'spades';
}
// My Solution 2

// Test the Solution
console.log(defineSuit('3♣')); //
console.log(defineSuit('3♦')); //
console.log(defineSuit('3♠')); //
console.log(defineSuit('3♥')); //

// One of other Solutions
function defineSuit(card) {
  const s = {
    '♣': 'clubs',
    '♠': 'spades',
    '♦': 'diamonds',
    '♥': 'hearts',
  };
  return s[card.charAt(card.length - 1)];
}
// One of other Solutions
function defineSuit(card) {
  return {
    '♣': 'clubs',
    '♦': 'diamonds',
    '♥': 'hearts',
    '♠': 'spades',
  }[card.substr(-1)];
}
