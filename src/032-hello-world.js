/**
 *  Hello World #32
 *  By @kirjavascript
 */

module.exports = () => {
    return /Hello, World/.source;
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null
