/**
 *  Hello World #040
 *  By @lukegil
 */

module.exports = () => {
  return __filename
    .replace(__dirname, "") // /file/path/040-hello-world.js ->  /040-hello-world.js
    .replace(/[^a-zA-Z\\.]/g, " ") // /040-hello-world.js -> "     hello world.js"
    .trim() // "     hello world.js" -> "hello world.js"
    .split(".")[0] // "hello world.js" -> ["hello world", "js"] -> "hello world"
    .split(" ") // "hello world" -> ["hello", "world"]
    .map((word) => word[0].toUpperCase() + word.slice(1, word.length)) // ["hello", "world"] -> ["Hello", "World"]
    .join(", "); // ["Hello", "World"] -> "Hello, World"
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
