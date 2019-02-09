/**
 *  Hello World #6
 */

module.exports = () => {
  const helloWorld = "Ifmmp-!Xpsme";
  let returnValue = "";
  helloWorld.split("").forEach((value, index, array) => {
    returnValue += String.fromCharCode(helloWorld.charCodeAt(index) - 1);
  });

  return returnValue;
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
