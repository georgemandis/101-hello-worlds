const helloWorld = [72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100];

helloWorld.forEach((unicode) => {
    process.stdout.write(String.fromCharCode(unicode))    
}) 

console.log();
