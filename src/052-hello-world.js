/**
 *  Hello World #52
 *  By @georgemandis
 *
 *  Maps Roman numerals to ASCII character codes, then converts to characters
 */

module.exports = () => {
  const romanToInt = (s) => {
    const vals = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let total = 0;
    for (let i = 0; i < s.length; i++) {
      const curr = vals[s[i]];
      const next = vals[s[i + 1]] || 0;
      total += curr < next ? -curr : curr;
    }
    return total;
  };

  // H=72, e=101, l=108, l=108, o=111, ,=44, ' '=32, W=87, o=111, r=114, l=108, d=100
  const codes = [
    "LXXII",    // 72  -> H
    "CI",       // 101 -> e
    "CVIII",    // 108 -> l
    "CVIII",    // 108 -> l
    "CXI",      // 111 -> o
    "XLIV",     // 44  -> ,
    "XXXII",    // 32  -> (space)
    "LXXXVII",  // 87  -> W
    "CXI",      // 111 -> o
    "CXIV",     // 114 -> r
    "CVIII",    // 108 -> l
    "C"         // 100 -> d
  ];

  return codes.map((r) => String.fromCharCode(romanToInt(r))).join("");
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
