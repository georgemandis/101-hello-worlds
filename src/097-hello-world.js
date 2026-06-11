/**
 *  Hello World #97
 *  By @georgemandis
 *
 *  Iterator protocol — Custom iterable object with
 *  Symbol.iterator that yields characters
 */

module.exports = () => {
  const helloIterable = {
    [Symbol.iterator]() {
      const codes = [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100];
      let index = 0;
      return {
        next() {
          if (index < codes.length) {
            return { value: String.fromCharCode(codes[index++]), done: false };
          }
          return { value: undefined, done: true };
        }
      };
    }
  };

  return [...helloIterable].join("");
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
