/**
 *  Hello World #4
 */

module.exports = () => {
  const helloWorld = ['d', 'l', 'r', 'o', 'W', ' ', ',', 'o', 'l', 'l', 'e', 'H'];
  let returnValue = "";;
  helloWorld.reverse().forEach((letter) => {
      returnValue += letter;
  });
  return returnValue;;
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;


