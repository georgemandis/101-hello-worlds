/**
 *  Hello World #2
 */

module.exports = () => {
  const helloWorld = ['H','e','l','l','o',',',' ','W','o','r','l','d'];
  return (helloWorld.join(''));
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
