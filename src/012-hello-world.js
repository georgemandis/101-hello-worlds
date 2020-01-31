/**
 *  Hello World #12
 *  By @georgemandis
 */

eval(
  Buffer.from(
    "bW9kdWxlLmV4cG9ydHMgPSAoKSA9PiB7CglyZXR1cm4gIkhlbGxvLCBXb3JsZCIKfQ==",
    "base64"
  ).toString("binary")
);

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
