/**
 *  Hello World #15
 */

module.exports = () => {
  return (word => {
    let hackerLetters = {
      h: "H",
      3: "e",
      1: "l",
      0: "o",
      w: "W"
    };
    return word
      .split("")
      .map((value, index, array) => {
        return hackerLetters[value] ? hackerLetters[value] : value;
      })
      .join("");
  })("h3110, w0r1d");
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
