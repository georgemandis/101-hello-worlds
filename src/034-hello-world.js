/**
 *  Hello World #11
 */

module.exports = () => {
    var a = '🌍🌏🌏🌍🌍🌎🌍🌏🌍🌏🌎🌎🌍🌍🌍🌎🌎🌍🌍🌍🌎🌎🌍🌎🌍🌍🌎🌎🌏🌏🌍🌎🌍🌎🌏🌎🌍🌍🌏🌍🌎🌎🌍🌎🌍🌎🌎🌍🌏🌍🌎🌎🌍🌍🌍🌎🌍🌏🌍🌎 ';
    var thing = 0;
    var thang = '';
    for (i = 0; i < a.length; i+=2) {
        if (i % 10 == 0) {
            thang += String.fromCharCode(thing);
            thing = 0;
        } else {
            thing *= 3;
        }
        var s = a.slice(i, i+2);
        if (s > '🌍') {
            thing++;
        }
        if (s > '🌎') {
            thing++;
        }
    }
    return thang.slice(1);
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
