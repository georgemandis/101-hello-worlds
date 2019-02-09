/**
 *  Hello World #<number>
 */

module.exports = () => {
  // Put your Hello world code here. 
  // Make sure this function ultimately returns "Hello, World" as it's value
  // Have fun!
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
