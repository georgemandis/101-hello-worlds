/**
 *  Hello World #95
 *  By @georgemandis
 *
 *  Tagged template literal — Tag function that rearranges
 *  template parts
 */

module.exports = () => {
  function rearrange(strings, ...values) {
    const order = [4, 1, 2, 2, 3, 5, 6, 0, 3, 7, 2, 8];
    return order.map(i => values[i]).join("");
  }

  return rearrange`${"W"}${"e"}${"l"}${"o"}${"H"}${","}${" "}${"r"}${"d"}`;
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
