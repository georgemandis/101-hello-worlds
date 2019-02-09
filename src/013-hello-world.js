/**
 *  Hello World #13
 */

module.exports = () => {
  let returnValue = "";
  ["Hello + World", "World + Hello"].forEach((word, index, array) => {
    try {
      eval(word);
    } catch (e) {
      returnValue +=
        e.message.replace(/\ is not defined|Unexpected token\ /, "") +
        (index !== array.length - 1 ? ", " : "");
    }
  });

  return returnValue;
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
