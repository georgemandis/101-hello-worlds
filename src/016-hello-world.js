/**
 *  Hello World #16
 *  By @georgemandis
 */

module.exports = () => {
  function alphabet(stop = false, uppercase = false) {
    this.counter = typeof this.counter !== "number" ? 0 : this.counter + 1;
    
    const letter = new Array(26).fill().map((value, index, array) => {
      return uppercase
        ? String.fromCharCode(97 + index).toUpperCase()
        : String.fromCharCode(97 + index);
    })[this.counter];

    if (stop) this.counter = -1;
    return stop ? letter : alphabet;
  }

  let returnValue = [
    alphabet()()()()()()()(true, true),
    alphabet()()()()(true),
    alphabet()()()()()()()()()()()(true),
    alphabet()()()()()()()()()()()(true),
    alphabet()()()()()()()()()()()()()()(true),
    ", ",
    alphabet()()()()()()()()()()()()()()()()()()()()()()(true, true),
    alphabet()()()()()()()()()()()()()()(true),
    alphabet()()()()()()()()()()()()()()()()()(true),
    alphabet()()()()()()()()()()()(true),
    alphabet()()()(true)
  ];

  return returnValue.join("");
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
