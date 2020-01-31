/**
 *  Hello World #11
 *  By @georgemandis
 */

module.exports = () => {
    const helloWorld = ['H','e','l','l','o',',',' ','W','o','r','l','d'];
    let returnValue = "";
    while (helloWorld.length > 0) {
        let letter = String.fromCharCode(parseInt(Date.now().toString().substr(-3)));
        if (letter === helloWorld[0]) {
            returnValue += (letter)        
            helloWorld.shift();
        }
    }
    return returnValue;
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
