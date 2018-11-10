let helloWorld = "Hello, World";

while (helloWorld.length > 0) {
    let character = String.fromCharCode(Math.round(Math.random() * 122))
    
    if (helloWorld.indexOf(character) >= 0) {        
        helloWorld = helloWorld.replace(character, "");
    }
    
}

console.log("Hello, World")