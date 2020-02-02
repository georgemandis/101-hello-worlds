# 101 Ways to Say "Hello, World"

A Rube Goldbergian exercise in exploring convoluted solutions to simple problems. The goal of this repo is to accrue 101 uniqe approaches to saying 'Hello, World' in JavaScript. Over engineering and outside-the-box thinking is encouraged!

## Getting Started & Contributing

**Please contribute your solution!** I want to see your over-engineered solutions to the first program all programmers learn. For discussions on ways to improve this please see the issue tracker.

If you would like to add your own "Hello, World" solution to the repository I suggest starting with the `template.js` file. Copy it to the correct filename in the `src/` folder and rename it to the next number in the sequence, e.g. `00X-hello-world.js`. 

So long as your solution returns a value of "Hello, World" (case-sensitive!) it should pass the tests. Look at `src/001-hello-world.js` for the simplest example.

When you're ready to make a pull request please use this format for your branch name:

`<github username>-<3-digit zero left-padded number>-hello-world`

For example, if I was contributing a solution that happened to be the 16th in the repository I'd format my branch name like this:

`georgemandis-016-hello-world`

If multiple people submit pull requests with the same number don't worry. I'll fix everything in merge.

Though not required, I'd highly encourage a written description either in the comments of your code or the pull request  explaining what's going on in the program and what your approach was. It's easy to test and figure out if it works, but it's not always easy to tell at a glance *how* or *why* it works.

## Rules

For the most part there are no rules, though I expect (and slightly hope) that might change as people make more adventurous solutions! To keep the test script usable and potentially automatable I'd ask that no solutions require an extreme amount of time to execute. One example I had but nixed: a "Hello, World" script that takes days to execute. Funny and interesting, but kind of renders the testing impractical.

## Running Tests

Simply run:

`npm run test`

All of the contributed examples will be tested to assure they return "Hello, World" as their values. Examples that fail should be noted in the output.

If you use the `template.js` file to start it's setup so that you can also simply run `node src/00x-hello-world.js` to execute your script and see what the output will be.

## Inspiration

Places to look for inspiration:

- [FizzBuzzEnerpriseEdition](https://github.com/EnterpriseQualityCoding/FizzBuzzEnterpriseEdition)
- [The International Obfuscated C Code Contest](https://www.ioccc.org/)
- [The Bulwer Lytton Fiction Contest](https://www.bulwer-lytton.com/)
- [Blackout Poetry](https://www.scholastic.com/teachers/blog-posts/john-depasquale/blackout-poetry/)

