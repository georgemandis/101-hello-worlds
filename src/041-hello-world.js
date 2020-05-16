/**
 *  Hello World #040
 *  By @kirjavascript
 */

module.exports = () =>
    (a=t=>{try{return t``}catch(g){return(globalThis[e=(g+[g]).
    match(/\S+/g)[1]]=e),a(t)}})(()=>[]+[ Hello, ' ' + World ])

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == '.' ? console.log(module.exports()) : null;
