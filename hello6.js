const helloWorld = "Ifmmp-!Xpsme";

helloWorld.split("").forEach((value, index, array) => {    
    process.stdout.write( String.fromCharCode(helloWorld.charCodeAt(index) - 1))
})

console.log()