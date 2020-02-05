/**
 *  Hello World #37
 *  by @georgemandis
 */

module.exports = () => {
  
  const helloWorld = (function* g() {
    yield "H";
    yield "e";
    yield "l";
    yield "l";
    yield "o";
    yield ",";
    yield " ";
    yield "W";
    yield "o";
    yield "r";
    yield "l";
    yield "d";    
  })();
  return [helloWorld.next().value,helloWorld.next().value,helloWorld.next().value,helloWorld.next().value,helloWorld.next().value,helloWorld.next().value,helloWorld.next().value,helloWorld.next().value,helloWorld.next().value,helloWorld.next().value,helloWorld.next().value,helloWorld.next().value].join('');
  
}

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
