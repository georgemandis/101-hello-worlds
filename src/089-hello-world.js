/**
 *  Hello World #89
 *  By @georgemandis
 *
 *  Reduce with accumulator — Array.reduce building string
 *  from transformation rules
 */

module.exports = () => {
  const rules = [
    { base: 60, add: 12 },   // H = 72
    { base: 90, add: 11 },   // e = 101
    { base: 100, add: 8 },   // l = 108
    { base: 100, add: 8 },   // l = 108
    { base: 100, add: 11 },  // o = 111
    { base: 40, add: 4 },    // , = 44
    { base: 20, add: 12 },   // (space) = 32
    { base: 80, add: 7 },    // W = 87
    { base: 100, add: 11 },  // o = 111
    { base: 100, add: 14 },  // r = 114
    { base: 100, add: 8 },   // l = 108
    { base: 90, add: 10 },   // d = 100
  ];

  return rules.reduce((acc, rule) => {
    return acc + String.fromCharCode(rule.base + rule.add);
  }, "");
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
