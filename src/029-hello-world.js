/**
 *  Hello World #29
 *  By @capnfabs
 */

module.exports = () => {
  var yes = '🥈🥥🥬🍬👯🔬🤠🕗🍯🩲👬🥤';
  var no = [];
  for (var i = 1; i < yes.length; i+=2) {
    no = no.concat([yes.charAt(i)]);
  }
  return no.map(yes => (yes.charCodeAt(0) & 0xFF))
           .map(no => String.fromCharCode(no))
           .join('');
};

  /**
   * If run directly "Hello, World" will be written to the console
   * If run as a module during the tests it return "Hello, World" as
   * a value to assert correctness;
   */

  module.id == "." ? console.log(module.exports()) : null;
