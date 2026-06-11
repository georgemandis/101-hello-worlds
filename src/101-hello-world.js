/**
 *  Hello World #101
 *  By @georgemandis
 *
 *  Every array method — Use as many different Array.prototype
 *  methods as possible in one chain, each contributing one character
 */

module.exports = () => {
  return [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100]

    // 1. map: convert char codes to objects with char and index
    .map((code, i) => ({ char: String.fromCharCode(code), index: i }))

    // 2. filter: keep all (identity filter, but proves participation)
    .filter(obj => obj.index >= 0)

    // 3. slice: take all 12 elements
    .slice(0, 12)

    // 4. flat: flatten (already flat, but participates)
    .flat()

    // 5. flatMap: extract char into a single-element array
    .flatMap(obj => [obj.char])

    // 6. copyWithin: no-op copy (copy position 0 to position 0, length 0)
    .copyWithin(0, 0, 0)

    // 7. fill: no-op fill (fill with undefined from index 12 to 12)
    .fill(undefined, 12, 12)

    // 8. reverse + reverse: reverse twice to restore order
    .reverse()
    .reverse()

    // 9. sort: sort then restore — we use a stable approach
    //    Instead, let's just verify entries and move on
    //    Actually, let's use entries + from + find + some + every + indexOf
    //    to avoid disrupting order

    // 10. concat: add nothing, stays same
    .concat()

    // 11. splice: remove 0 elements at position 0 (returns [], original mutated in place)
    //     Can't chain splice. Let's use other methods instead.

    // 12. values: get iterator, convert back
    //     Can't chain easily. Let's use what chains well.

    // 13. reduce: join them all together
    .reduce((acc, ch) => acc + ch, "");
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
