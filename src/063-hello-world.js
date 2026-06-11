/**
 *  Hello World #63
 *  By @georgemandis
 *
 *  Decodes braille unicode patterns back to ASCII letters
 */

module.exports = () => {
  // Braille alphabet mapping (Unicode braille patterns)
  const brailleMap = {
    '\u2813': 'H', // ⠓
    '\u2811': 'e', // ⠑
    '\u2807': 'l', // ⠇
    '\u2815': 'o', // ⠕
    '\u2824': ',', // ⠤
    '\u2800': ' ', // ⠀
    '\u283a': 'W', // ⠺ (note: using custom mapping for uppercase/lowercase)
    '\u2817': 'r', // ⠗
    '\u2819': 'd', // ⠙
  };

  // Build a more precise mapping: each position in the encoded string
  // maps to a specific character via its braille code point
  const target = "Hello, World";
  const charCodes = [];
  for (let i = 0; i < target.length; i++) {
    charCodes.push(target.charCodeAt(i));
  }

  // Encode each character code as a braille dot pattern:
  // We store char codes as braille offset from U+2800
  const brailleEncoded = charCodes.map(c => String.fromCharCode(0x2800 + c));

  // Decode: subtract the braille base to recover original char codes
  return brailleEncoded.map(b => String.fromCharCode(b.charCodeAt(0) - 0x2800)).join('');
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
