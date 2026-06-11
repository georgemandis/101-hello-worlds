/**
 *  Hello World #56
 *  By @georgemandis
 *
 *  Extracts specific digit positions from mathematical constants
 *  (pi, e, sqrt2, ln2) to reconstruct ASCII character codes
 */

module.exports = () => {
  // Get digit strings from math constants (removing the decimal point)
  const pi    = Math.PI.toFixed(15).replace(".", "");    // "3141592653589793"
  const e     = Math.E.toFixed(15).replace(".", "");     // "2718281828459045"
  const sqrt2 = Math.SQRT2.toFixed(15).replace(".", ""); // "1414213562373095"
  const ln2   = Math.LN2.toFixed(15).replace(".", "");   // "0693147180559945"

  const sources = { pi, e, sqrt2, ln2 };

  // Each entry: array of [source_name, digit_position] pairs
  // Concatenated digits form an ASCII character code
  //
  // pi    = 3 1 4 1 5 9 2 6 5 3 5 8 9 7 9 3
  //         0 1 2 3 4 5 6 7 8 9
  // e     = 2 7 1 8 2 8 1 8 2 8 4 5 9 0 4 5
  //         0 1 2 3 4 5 6 7 8 9
  // sqrt2 = 1 4 1 4 2 1 3 5 6 2 3 7 3 0 9 5
  //         0 1 2 3 4 5 6 7 8 9
  // ln2   = 0 6 9 3 1 4 7 1 8 0 5 5 9 9 4 5
  //         0 1 2 3 4 5 6 7 8 9

  const charCodes = [
    [["e", 1], ["e", 4]],                                // 7,2 -> 72 (H)
    [["sqrt2", 0], ["ln2", 0], ["e", 2]],                // 1,0,1 -> 101 (e)
    [["sqrt2", 0], ["ln2", 0], ["e", 7]],                // 1,0,8 -> 108 (l)
    [["sqrt2", 0], ["ln2", 0], ["e", 7]],                // 1,0,8 -> 108 (l)
    [["sqrt2", 0], ["sqrt2", 0], ["sqrt2", 0]],          // 1,1,1 -> 111 (o)
    [["sqrt2", 1], ["sqrt2", 1]],                        // 4,4 -> 44 (,)
    [["pi", 0], ["e", 4]],                               // 3,2 -> 32 (space)
    [["e", 7], ["e", 1]],                                // 8,7 -> 87 (W)
    [["sqrt2", 0], ["sqrt2", 0], ["sqrt2", 0]],          // 1,1,1 -> 111 (o)
    [["sqrt2", 0], ["sqrt2", 0], ["sqrt2", 1]],          // 1,1,4 -> 114 (r)
    [["sqrt2", 0], ["ln2", 0], ["e", 7]],                // 1,0,8 -> 108 (l)
    [["sqrt2", 0], ["ln2", 0], ["ln2", 0]],              // 1,0,0 -> 100 (d)
  ];

  return charCodes.map((pairs) => {
    const code = parseInt(pairs.map(([src, pos]) => sources[src][pos]).join(""), 10);
    return String.fromCharCode(code);
  }).join("");
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
