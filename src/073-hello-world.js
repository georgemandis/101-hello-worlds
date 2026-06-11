/**
 *  Hello World #73
 *  By @georgemandis
 *
 *  Evaluates continued fraction representations to produce character codes
 */

module.exports = () => {
  // A continued fraction [a0; a1, a2, a3, ...] represents:
  //   a0 + 1/(a1 + 1/(a2 + 1/(a3 + ...)))
  // We encode each character code as a continued fraction and evaluate it.

  // Evaluate a continued fraction given as an array [a0, a1, a2, ...]
  function evalCF(coefficients) {
    let result = coefficients[coefficients.length - 1];
    for (let i = coefficients.length - 2; i >= 0; i--) {
      result = coefficients[i] + 1 / result;
    }
    return result;
  }

  // Key insight for integer-valued continued fractions:
  //   [a, 0, c] = a + 1/(0 + 1/c) = a + c  (always an integer if a,c are integers)
  //   [a, 1]    = a + 1/1 = a + 1
  //   [a]       = a (trivial)
  //
  // We use a mix of these forms for variety.

  const charCFs = [
    [35, 0, 37],    // H = 35 + 37 = 72
    [100, 1],       // e = 100 + 1 = 101
    [50, 0, 58],    // l = 50 + 58 = 108
    [107, 1],       // l = 107 + 1 = 108
    [55, 0, 56],    // o = 55 + 56 = 111
    [22, 0, 22],    // , = 22 + 22 = 44
    [16, 0, 16],    // ' ' = 16 + 16 = 32
    [86, 1],        // W = 86 + 1 = 87
    [110, 1],       // o = 110 + 1 = 111
    [57, 0, 57],    // r = 57 + 57 = 114
    [54, 0, 54],    // l = 54 + 54 = 108
    [99, 1],        // d = 99 + 1 = 100
  ];

  return charCFs.map(cf => {
    const value = Math.round(evalCF(cf));
    return String.fromCharCode(value);
  }).join('');
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
