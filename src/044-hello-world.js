/**
 *  Hello World #44
 *  By @mcecode
 */

module.exports = () => ("" + +`${void 0}` + +`${void 0}` + +`${void 0}` + +`${void 0}`)
  .split("")
  .map((v, i) =>
    String.fromCharCode(
      parseInt(
        [
          "0001001",
          "1010011",
          "0011011",
          "0011011",
          "1111011",
          "001101",
          "000001",
          "1110101",
          "1111011",
          "0100111",
          "0011011",
          "0010011"
        ][i]
          .split("")
          .reverse()
          .join(""),
        2
      )
    )
  )
  .join("");

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
