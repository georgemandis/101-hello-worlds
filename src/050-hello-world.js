/**
 *  Hello World #50
 *  By @georgemandis
 *
 *  Applies ROT13 decryption to transform "Uryyb, Jbeyq" back into "Hello, World"
 */

module.exports = () => {
  const encoded = "Uryyb, Jbeyq";
  return encoded.replace(/[a-zA-Z]/g, (c) => {
    const base = c <= "Z" ? 65 : 97;
    return String.fromCharCode(((c.charCodeAt(0) - base + 13) % 26) + base);
  });
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
