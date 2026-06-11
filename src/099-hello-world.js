/**
 *  Hello World #99
 *  By @georgemandis
 *
 *  with() statement — Use the (deprecated!) with statement
 *  to resolve properties from a scope object
 */

module.exports = () => {
  const scope = {
    H: "H", e: "e", l: "l", o: "o",
    comma: ",", space: " ",
    W: "W", r: "r", d: "d"
  };

  let result;

  with (scope) {
    result = H + e + l + l + o + comma + space + W + o + r + l + d;
  }

  return result;
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
