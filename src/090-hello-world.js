/**
 *  Hello World #90
 *  By @georgemandis
 *
 *  Symbol.toPrimitive — Object with Symbol.toPrimitive returning
 *  different pieces when coerced
 */

module.exports = () => {
  let callCount = 0;
  const pieces = ["Hello", ", ", "World"];

  const magicObj = {
    [Symbol.toPrimitive](hint) {
      return pieces[callCount++] || "";
    }
  };

  return `${magicObj}${magicObj}${magicObj}`;
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
