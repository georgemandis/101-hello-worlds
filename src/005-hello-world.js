/**
 *  Hello World #5
 *  By @georgemandis
 */

module.exports = () => {
  const helloWorld = [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100];
  let returnValue = "";
  helloWorld.forEach(unicode => {
    returnValue += String.fromCharCode(unicode);
  });

  return returnValue;
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
