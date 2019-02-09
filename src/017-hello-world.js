/**
 *  Hello World #17
 */

module.exports = () => {
  return [
    "SA==",
    "ZQ==",
    "bA==",
    "bA==",
    "bw==",
    "LA==",
    "IA==",
    "Vw==",
    "bw==",
    "cg==",
    "bA==",
    "ZA=="
  ].reduce((previous, current, index, array) => {
    return (
      (index > 1
        ? previous
        : Buffer.from(previous, "base64").toString("binary")) +
      Buffer.from(current, "base64").toString("binary")
    );
  });
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
