/**
 *  Hello World #96
 *  By @georgemandis
 *
 *  SharedArrayBuffer + Atomics — Use Atomics operations to
 *  store and load character codes
 */

module.exports = () => {
  const target = "Hello, World";
  const sab = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * target.length);
  const view = new Int32Array(sab);

  for (let i = 0; i < target.length; i++) {
    Atomics.store(view, i, target.charCodeAt(i));
  }

  let result = "";
  for (let i = 0; i < target.length; i++) {
    result += String.fromCharCode(Atomics.load(view, i));
  }

  return result;
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
