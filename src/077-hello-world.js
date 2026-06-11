/**
 *  Hello World #77
 *  By @georgemandis
 *
 *  Computes Collatz sequence lengths for specific starting numbers,
 *  and those lengths map to the character codes of "Hello, World"
 */

module.exports = () => {
  // Collatz sequence: if n is even, n/2; if odd, 3n+1. Count steps until 1.
  const collatzLength = (n) => {
    let steps = 0;
    while (n !== 1) {
      n = n % 2 === 0 ? n / 2 : 3 * n + 1;
      steps++;
    }
    return steps;
  };

  // We need starting numbers whose Collatz sequence lengths equal char codes:
  // H=72, e=101, l=108, l=108, o=111, ','=44, ' '=32, W=87, o=111, r=114, l=108, d=100
  // Precomputed: find n where collatzLength(n) == charCode
  // We search for the smallest n with each required length.
  const targetLengths = [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100];

  // Precompute a map from length to smallest starting number
  const lengthToN = {};
  const needed = new Set(targetLengths);
  for (let n = 2; needed.size > 0; n++) {
    const len = collatzLength(n);
    if (needed.has(len) && !(len in lengthToN)) {
      lengthToN[len] = n;
      needed.delete(len);
    }
  }

  // The encoded starting numbers (decode by computing their Collatz lengths)
  const startingNumbers = targetLengths.map((len) => lengthToN[len]);

  return startingNumbers
    .map((n) => String.fromCharCode(collatzLength(n)))
    .join("");
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
