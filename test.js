/**
 * Test that all the "Hello, World" scripts return "Hello, World" precisely.
 */

// Using glob to read the src folder would make plenty of sense but I'm
// trying to avoid dependencies, partly because I'm on an airplane
// without wifi right now and can't look up stuff or install them even if
// I wanted to use them. If and when this repositroy reaches 101 examples
// I'll conceded and change this.

const helloWorlds = Array(101)
  .fill(101)
  .map((value, index, array) => {
    return `./src/${(index + 1).toString().padStart(3, "0")}-hello-world.js`;
  });

const results = helloWorlds.reduce((previous, current, index) => {
  // The try/catch approach here is required because of my non-glob
  // approach noted earlier.
  try {
    let previousReturnsHelloWorld = previous;
    if (index === 1) {
      previousReturnsHelloWorld = require(previous)() === "Hello, World";
      console.log(
        `${previous} — ${
          previousReturnsHelloWorld ? "✅ Passes!" : "❌ Fails :("
        }`
      );
    }

    const returnsHelloWorld = require(current)() === "Hello, World";
    console.log(
      `${current} — ${returnsHelloWorld ? "✅ Passes!" : "❌ Fails :("}`
    );

    return index == 1
      ? previousReturnsHelloWorld && returnsHelloWorld
      : previous && returnsHelloWorld;
  } catch (e) {
    // Ignore module not found errors because that's expected
    // until we reach 101 examples.
    if (e.code !== "MODULE_NOT_FOUND") {
      console.log(`${current} — ❌ Fails: ${e.message}`);
      return false;
    } else {
      return previous;
    }
  }
});

console.log(
  `\n${
    results
      ? "\n😀 Tests passed! All scripts returned 'Hello, World'"
      : "\n☹️  Tests failed! One or more scripts did not return 'Hello, World'"
  }\n`
);
