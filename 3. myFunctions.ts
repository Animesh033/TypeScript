// function addTwo(num) {
//     num.toUpperCase()
//     return num+2
// }

// addTwo(5)


function addTwo(num: number) {
    //num.toUpperCase() // ts is showing that we can't use toUpperCase on number
    return num+2
}

addTwo(5)

function getUpper(val: string) {
    return val.toUpperCase()
}

getUpper("animesh")

// Incorrect way of writting function as arg is of any type
function signUpUser(name, email, password) {

}

signUpUser(1, 2, 3)

// Crrect way of writting function as arg data type is defined and when calling this fun it's showing error
function signUpUser1(name: string, email: string, password: string) {

}

signUpUser1(1, 2, 3)


// Crrect way of writting function as arg data type is defined and when calling this fun it's not showing error
function signUpUser2(name: string, email: string, password: string) {

}

signUpUser2("1", "2", "3")


function signUpUser3(name: string, email: string, isPaid: boolean) {

}

signUpUser3("1", "2", true)

let loginUser = (name: string, email: string, isPaid:boolean = false) => {

}

loginUser("", "", true)


function addTwoo(num: number) {
    // return num+2
    // do waterever u want but what if i return string at the end?
    return "hello"
}

let myVal = addTwoo(5) // It is allowed now but it was not expected

// A better way of writing functions

function addTwooo(num: number): number {
    // return num+2
    // Now TS showing error that u can't return string were number is expected to be returned
    return "hello"
}

let myVall = addTwooo(5)

function getValue(myVal: number): boolean {
    if(myVal > 5) {
        return true
    }
    return "200 OK"

    // Here in any one case, there will be a problem either we chage it to string to keep it as boolean 
}


let getHello = (s: string): string => {
    return ""
}

// const heros = [
//     "thor",
//     "spidermen",
//     "ironman"
// ]

const heros = [
    1, 2, 3
]

heros.map(hero => {
    return `hero is ${hero}`
})

heros.map((hero): string => {
    // return `hero is ${hero}`
    return 1 // Showing error as it is expecting to return a string
})


function consoleError(errmsg: string): void {
    console.log(errmsg)
}

function handleError(errmsg: string): never {
    throw new Error(errmsg)
}


