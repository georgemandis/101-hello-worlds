/**
 *  Hello World #18
 */

module.exports = () => {
  const helloWorldMatrix = [
    0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,
    0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,
    0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,
    0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,
    0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,
    0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,
    0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,
    0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,
    0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,
    0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,
    0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0
  ];

  let returnValue = "";
  for (let row = 0; row < helloWorldMatrix.length; row += 16) {
    const binaryLetter = [];
    for (let x = 0; x < 16; x++) {
      binaryLetter.push(helloWorldMatrix[row + x]);
    }

    returnValue += String.fromCharCode(parseInt(binaryLetter.join(""), 2));
  }

  return returnValue;
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
