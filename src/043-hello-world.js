/**
 *  Hello World #43 
 *  By @georgemandis
 */

module.exports = () => ($$ = [' World'], $ =['Hello', ''], `${$}${$$}`);

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null