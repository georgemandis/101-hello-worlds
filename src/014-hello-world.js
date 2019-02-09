/**
 *  Hello World #14
 */

module.exports = () => {
  const helloWorld = "Hello, World".split("");
  let returnValue = "";
  const commands = [
    `"H"`,
    `1 = "F"`,
    `@@@`,
    `"".repeat(Infinity)`,
    `3.14.toFixed(-1)`,
    `", "`,
    `!!!`,
    `"W"`,
    `const m = true; m = false`,
    `anObject = {}; anObject.notAProperty.toString()`,
    `1 — 1`,
    `(x)={x`
  ];

  commands.forEach(command => {
    let phrase;
    try {
      phrase = eval(command).toString();
    } catch (e) {
      phrase = e.message.toString();
    }

    if (phrase.indexOf(helloWorld[0]) >= 0) {
      returnValue += helloWorld[0];
      helloWorld.shift();
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
