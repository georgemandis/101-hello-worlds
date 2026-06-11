/**
 *  Hello World #92
 *  By @georgemandis
 *
 *  ArrayBuffer / DataView — Write character codes into an
 *  ArrayBuffer, read back as string
 */

module.exports = () => {
  const target = "Hello, World";
  const buffer = new ArrayBuffer(target.length);
  const view = new DataView(buffer);

  const codes = [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100];

  codes.forEach((code, i) => {
    view.setUint8(i, code);
  });

  let result = "";
  for (let i = 0; i < view.byteLength; i++) {
    result += String.fromCharCode(view.getUint8(i));
  }

  return result;
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
