function helloWorld (string="Hello, World")  {    
    this.string = string;
    process.stdout.write(this.string[0]);
    return () => helloWorld(string.substr(1))    
}

helloWorld()()()()()()()()()()()();

console.log()
