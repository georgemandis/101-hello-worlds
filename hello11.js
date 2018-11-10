const helloWorld = ['H','e','l','l','o',',',' ','W','o','r','l','d'];

while (helloWorld.length > 0) {
    let letter = String.fromCharCode(parseInt(Date.now().toString().substr(-3)));
    if (letter === helloWorld[0]) {
        process.stdout.write(letter)        
        helloWorld.shift();
    }
}

console.log();



 