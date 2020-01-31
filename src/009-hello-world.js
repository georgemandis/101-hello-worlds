/**
 *  Hello World #9
 *  By @georgemandis
 */

module.exports = () => {
  let returnValue = "";
  function helloWorld(string = "Hello, World") {
    this.string = string;
    this.returnValue = this.returnValue ? this.returnValue : "";
    this.returnValue += this.string[0];

    return this.string.length > 1
      ? () => helloWorld(string.substr(1))
      : this.returnValue;
  }

  return helloWorld()()()()()()()()()()()();
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
