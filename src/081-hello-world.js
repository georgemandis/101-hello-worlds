/**
 *  Hello World #81
 *  By @georgemandis
 *
 *  Poker hands where card values in each hand encode character codes
 *  of "Hello, World" through rank and suit arithmetic
 */

module.exports = () => {
  // Card ranks: A=1, 2-10, J=11, Q=12, K=13
  // Suits: clubs=0, diamonds=1, hearts=2, spades=3
  // Each hand encodes one character: charCode = sum of (rank * 4 + suit) for selected cards

  // We encode each character as a pair of cards whose combined value gives the char code.
  // cardValue = rank * suit_multiplier + suit_offset
  // For simplicity: each hand has cards whose rank values sum to the character code.

  const ranks = { A: 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, T: 10, J: 11, Q: 12, K: 13 };
  const suits = { c: 0, d: 1, h: 2, s: 3 };

  // Each "hand" is an array of cards [rank, suit].
  // The character code = sum of all (rank * 9 + suitValue) in the hand.
  // H=72:  72 = 8*9+0 → [["8","c"]]  → 72
  // e=101: 101 = 11*9+2 → [["J","h"]] → 101
  // l=108: 108 = 12*9+0 → [["Q","c"]] → 108
  // o=111: 111 = 12*9+3 → [["Q","s"]] → 111
  // ,=44:  44 = 4*9+8 → nah. Let's use a different formula.

  // Simpler: each hand has exactly two cards.
  // charCode = firstCard_rank * 10 + secondCard_rank + suit_bonus
  // where suit_bonus comes from the first card's suit.

  // Even simpler: encode directly. Each hand stores [highCard, kicker, suitBonus].
  // charCode = highCard * 13 + kicker + suitBonus

  // Let's use: charCode = card1_rank * 8 + card2_rank + card1_suit
  // H=72:  72 = 8*8 + 5 + 3  → K8s, 5s → ranks [8,5] suit_bonus=3(spades)
  // Actually let me just be more direct about it.

  // Each poker hand has a "hand rank" (pair, two pair, etc.) and card values.
  // hand_type_value * 15 + high_card_rank = char code
  // hand types: high_card=0, pair=1, two_pair=2, three_kind=3, straight=4,
  //             flush=5, full_house=6, four_kind=7, straight_flush=8

  const handTypes = {
    high_card: 0, pair: 1, two_pair: 2, three_kind: 3, straight: 4,
    flush: 5, full_house: 6, four_kind: 7, straight_flush: 8,
  };

  // charCode = handType * 13 + highCard  (highCard 0-12)
  // H=72:  72 / 13 = 5 r 7  → flush, highCard=7(8)         → 5*13+7 = 72
  // e=101: 101 / 13 = 7 r 10 → four_kind, highCard=10(J)    → 7*13+10 = 101
  // l=108: 108 / 13 = 8 r 4  → straight_flush, highCard=4(5)→ 8*13+4 = 108
  // o=111: 111 / 13 = 8 r 7  → straight_flush, highCard=7(8)→ 8*13+7 = 111
  // ,=44:  44 / 13 = 3 r 5   → three_kind, highCard=5(6)    → 3*13+5 = 44
  // ' '=32: 32 / 13 = 2 r 6  → two_pair, highCard=6(7)      → 2*13+6 = 32
  // W=87:  87 / 13 = 6 r 9   → full_house, highCard=9(T)    → 6*13+9 = 87
  // r=114: 114 / 13 = 8 r 10 → straight_flush, highCard=10(J)→8*13+10 = 114
  // d=100: 100 / 13 = 7 r 9  → four_kind, highCard=9(T)     → 7*13+9 = 100

  const hands = [
    { type: "flush", highCard: 7 },           // H=72
    { type: "four_kind", highCard: 10 },      // e=101
    { type: "straight_flush", highCard: 4 },  // l=108
    { type: "straight_flush", highCard: 4 },  // l=108
    { type: "straight_flush", highCard: 7 },  // o=111
    { type: "three_kind", highCard: 5 },      // ,=44
    { type: "two_pair", highCard: 6 },        // ' '=32
    { type: "full_house", highCard: 9 },      // W=87
    { type: "straight_flush", highCard: 7 },  // o=111
    { type: "straight_flush", highCard: 10 }, // r=114
    { type: "straight_flush", highCard: 4 },  // l=108
    { type: "four_kind", highCard: 9 },       // d=100
  ];

  return hands
    .map((hand) => {
      const charCode = handTypes[hand.type] * 13 + hand.highCard;
      return String.fromCharCode(charCode);
    })
    .join("");
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
