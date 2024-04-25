/*

Syntax:
let variableName: type = value

Note: All data types are in lower case i.e 
let a: string = 'TypeScript'

*/

// string:
// let greetings: string

let greetings: string = 'Hello Animesh' // => above line and this both ok

console.log(greetings)

// number:
let userId: number = 9

// Note: if let userId: number = 98.33 then also type will be number only there is not float data type in ts

// TypeScript is smart enough to detect the var is type of number or string so we can simply write 
// let userId: number = 9 as
// let userId = 9



// any:

let hero;

function getHero() {
    return "Thor"
}

hero = getHero()

// We should always ignore using any data type in ts hence writing such above code in not a good pratice in ts

// Basically any datatype means that we donot want to check type of the variable

// Functions in TS:



