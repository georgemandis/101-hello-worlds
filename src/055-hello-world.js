/**
 *  Hello World #55
 *  By @georgemandis
 *
 *  Extracts characters from day and month names to build "Hello, World"
 */

module.exports = () => {
  // Each entry: [type, index_of_day_or_month, char_position]
  // type 0 = month name, type 1 = day name
  // We create dates with known days/months, then extract characters

  const getMonthName = (m) => {
    return new Date(2024, m, 1).toLocaleString("en-US", { month: "long" });
  };

  const getDayName = (d) => {
    // 2024-01-01 is a Monday. Offset to get the desired day.
    return new Date(2024, 0, d).toLocaleString("en-US", { weekday: "long" });
  };

  // Build character extractions:
  // H from "tHursday" -> day(4), pos 1... let's think carefully
  // Days: Sun(0), Mon(1), Tue(2), Wed(3), Thu(4), Fri(5), Sat(6)
  // 2024-01-01 = Monday
  // So: Mon=1, Tue=2, Wed=3, Thu=4, Fri=5, Sat=6, Sun=7
  // Months (0-indexed): Jan=0, Feb=1, Mar=2, Apr=3, May=4, Jun=5,
  //                     Jul=6, Aug=7, Sep=8, Oct=9, Nov=10, Dec=11

  const extractions = [
    // H: "March" index 4 -> no. Let's use "Thursday"[1] = 'h'... no, 'T','h','u','r','s','d','a','y'
    // Actually let me just map it directly:
    ["month", 2, 3],    // "March"[3] = 'c'... no.
  ];

  // Simpler approach: just get all month and day names and pick chars
  const months = Array.from({ length: 12 }, (_, i) => getMonthName(i));
  // months: January, February, March, April, May, June, July, August, September, October, November, December
  const days = Array.from({ length: 7 }, (_, i) => getDayName(i + 1));
  // days: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday

  // H: "Thursday"[1] = 'h' -> uppercase needed. days[3]="Thursday", [0]='T'
  //    "March"[0] = 'M'... we need 'H'
  //    None start with H. But characters inside:
  //    "Thursday" has 'T','h','u','r','s','d','a','y'
  //    "March" = 'M','a','r','c','h' -> [4] = 'h'

  // Let me build this more carefully with a direct mapping
  const picks = [
    [months[2], 4, true],   // "March"[4] = 'h' -> uppercase = 'H'
    [months[8], 1, false],  // "September"[1] = 'e'
    [months[6], 2, false],  // "July"[2] = 'l'
    [months[3], 4, false],  // "April"[4] = 'l'
    [months[9], 3, false],  // "October"[3] = 'o'
    [",", 0, false],        // literal comma
    [" ", 0, false],        // literal space
    [days[2], 0, false],    // "Wednesday"[0] = 'W'
    [months[9], 3, false],  // "October"[3] = 'o'
    [months[3], 2, false],  // "April"[2] = 'r'
    [months[6], 2, false],  // "July"[2] = 'l'
    [days[3], 5, false],    // "Thursday"[5] = 'd'
  ];

  return picks.map(([src, idx, upper]) => {
    const ch = src[idx];
    return upper ? ch.toUpperCase() : ch;
  }).join("");
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
