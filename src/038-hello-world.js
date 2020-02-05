/**
 *  Hello World #38
 *  by @georgemandis
 */

module.exports = () => {
  let str = "1He2ll3o,4 W5or6ld";
  let returnString = "";
  helloworld: for (let i = 0; i < 18; i++) {
    // console.log(i % 3);
    if (i % 3 === 0) {
      continue helloworld;
    }
    returnString = returnString + str[i];
  }

  return returnString;
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
