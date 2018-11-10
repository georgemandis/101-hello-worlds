
["Hello + World", "World + Hello"].forEach((word, index, array) => {
    try {
        eval(word)
    }catch(e) {        
        process.stdout.write(e.message.replace(/\ is not defined|Unexpected token\ /, "") + ((index !== array.length - 1) ? ", " : ""))                
    }
})

console.log();