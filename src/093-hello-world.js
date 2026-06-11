/**
 *  Hello World #93
 *  By @georgemandis
 *
 *  JSON parse reviver — JSON.parse with a reviver function
 *  that transforms values to characters
 */

module.exports = () => {
  const encoded = JSON.stringify({
    a: 72, b: 101, c: 108, d: 108, e: 111,
    f: 44, g: 32, h: 87, i: 111, j: 114,
    k: 108, l: 100
  });

  const chars = [];

  JSON.parse(encoded, (key, value) => {
    if (key !== "" && typeof value === "number") {
      chars.push(String.fromCharCode(value));
    }
    return value;
  });

  return chars.join("");
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
