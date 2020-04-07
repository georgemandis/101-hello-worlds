/**
 *  Hello World #<number>
 *  By @<github-username>
 */

module.exports = () => {
  return __filename
    .replace(__dirname, "")
    .replace(/[^a-zA-Z\\.]/g, " ")
    .split(".")[0]
    .trim()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1, word.length))
    .join(", ");
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
