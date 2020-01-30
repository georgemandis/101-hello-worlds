/**
 *  Hello World #27
 */

module.exports = () => {
    var parts = /([^\/]+):[\d]+:44/.exec( (new Error()).stack);
    parts = parts[1].split('.')[0].split('-');
    return [parts[1], parts[2]]
        .map(parts3 => parts3[0].toUpperCase() + parts3.slice(1))
        .join(', ');
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
