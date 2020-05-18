/**
 *  Hello World #39
 *  by @allicolyer
 */

module.exports = () => {
  return (a => {
    return (b => {
      return (c => {
        return (d => {
          return (e => {
            return (f => {
              return (g => {
                return (h => {
                  return (i => {
                    return (j => {
                      return (k => {
                        return (l => {
                          return l + k + j + i + h + g + f + e + d + c + b + a;
                        })("H");
                      })("e");
                    })("l");
                  })("l");
                })("o");
              })(",");
            })(" ");
          })("W");
        })("o");
      })("r");
    })("l");
  })("d");
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
