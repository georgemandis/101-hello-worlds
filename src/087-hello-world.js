/**
 *  Hello World #87
 *  By @georgemandis
 *
 *  ISBN-10-style codes whose weighted checksums yield the character
 *  codes of "Hello, World"
 */

module.exports = () => {
  // ISBN-10 checksum: sum of (position * digit) for positions 1-10, mod 11 = 0
  // We construct 9-digit sequences where the 10th "check digit" encodes our char.
  //
  // But check digits are 0-10, too small for char codes (32-114).
  //
  // Alternative approach: we use a weighted checksum over a digit sequence.
  // For each character, we have a sequence of digits and weights.
  // charCode = sum(digit[i] * weight[i]) for i in sequence
  //
  // We use a fixed set of weights [1, 2, 3, 4, 5] and find digit sequences
  // whose weighted sum equals each character code.

  // Weights for a 5-position code
  const weights = [1, 3, 5, 7, 9];

  // charCode = d0*1 + d1*3 + d2*5 + d3*7 + d4*9
  // Each digit 0-9.
  // H=72:   72 = 0*1 + 1*3 + 1*5 + 1*7 + 57/9? Let me compute properly.
  //         Try: d4=7 → 63, remain=9. d3=1→7, remain=2. d2=0, d1=0, d0=2. Check: 2+0+0+7+63=72 ✓
  // e=101:  d4=9→81, remain=20. d3=2→14, remain=6. d2=1→5, remain=1. d1=0, d0=1. Check: 1+0+5+14+81=101 ✓
  // l=108:  d4=9→81, remain=27. d3=3→21, remain=6. d2=1→5, remain=1. d1=0, d0=1. Check: 1+0+5+21+81=108 ✓
  // o=111:  d4=9→81, remain=30. d3=4→28, remain=2. d2=0, d1=0, d0=2. Check: 2+0+0+28+81=111 ✓
  // ,=44:   d4=4→36, remain=8. d3=1→7, remain=1. d2=0, d1=0, d0=1. Check: 1+0+0+7+36=44 ✓
  // ' '=32: d4=3→27, remain=5. d3=0, d2=1→5, remain=0. Check: 0+0+5+0+27=32 ✓
  // W=87:   d4=9→81, remain=6. d3=0, d2=1→5, remain=1. d1=0, d0=1. Check: 1+0+5+0+81=87 ✓
  // r=114:  d4=9→81, remain=33. d3=4→28, remain=5. d2=1→5, remain=0. Check: 0+0+5+28+81=114 ✓
  // d=100:  d4=9→81, remain=19. d3=2→14, remain=5. d2=1→5, remain=0. Check: 0+0+5+14+81=100 ✓

  const codes = [
    [2, 0, 0, 1, 7], // H=72:  2+0+0+7+63=72
    [1, 0, 1, 2, 9], // e=101: 1+0+5+14+81=101
    [1, 0, 1, 3, 9], // l=108: 1+0+5+21+81=108
    [1, 0, 1, 3, 9], // l=108
    [2, 0, 0, 4, 9], // o=111: 2+0+0+28+81=111
    [1, 0, 0, 1, 4], // ,=44:  1+0+0+7+36=44
    [0, 0, 1, 0, 3], // ' '=32: 0+0+5+0+27=32
    [1, 0, 1, 0, 9], // W=87:  1+0+5+0+81=87
    [2, 0, 0, 4, 9], // o=111
    [0, 0, 1, 4, 9], // r=114: 0+0+5+28+81=114
    [1, 0, 1, 3, 9], // l=108
    [0, 0, 1, 2, 9], // d=100: 0+0+5+14+81=100
  ];

  return codes
    .map((digits) => {
      const checksum = digits.reduce((sum, d, i) => sum + d * weights[i], 0);
      return String.fromCharCode(checksum);
    })
    .join("");
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
