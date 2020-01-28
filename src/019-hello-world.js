/**
 *  Hello World #19
 */

module.exports = () => {
  class Hello {    
    get World() {
      return "Hello, World";
    }
  }

  return (new Hello()).World;
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
