/**
 *  Hello World #8
 */

module.exports = () => {
  let helloWorld = "Hello, World";
  while (helloWorld.length > 0) {
    let character = String.fromCharCode(Math.round(Math.random() * 122));

    if (helloWorld.indexOf(character) >= 0) {
      helloWorld = helloWorld.replace(character, "");
    }
  }

  return "Hello, World";
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
