const helloWorld = "Hello, World".split("");

const commands = [
    `"H"`,
    `1 = "F"`,
    `@@@`,
    `"".repeat(Infinity)`,
    `3.14.toFixed(-1)`,
    `", "`,
    `!!!`,
    `"W"`,
    `const m = true; m = false`,
    `anObject = {}; anObject.notAProperty.toString()`,
    `1 — 1`,
    `(x)={x`
]

commands.forEach((command) => {
    let phrase;
    try {
        phrase = (eval(command)).toString()
    } catch (e) {
        phrase = (e.message).toString();
    }

    if (phrase.indexOf(helloWorld[0]) >= 0) {
        process.stdout.write(helloWorld[0]);
        helloWorld.shift();
    }
})

console.log()