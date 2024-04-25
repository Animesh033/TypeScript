const user = {
    name: "Animesh",
    email: "kumar-animesh.com",
    isActive: true
}


function createUser({name: string, isPaid: boolean}) {

}

createUser() // SHowing error

function createUser2({name: string, isPaid: boolean}) {

}

createUser2({}) // SHowing error

function createUser3({name: string, isPaid: boolean}) {

}

createUser3({name: "Animesh", isPaid:false})  // Now Ok


function createUser4({name: string, isPaid: boolean}) {

}

let newUser = {name: "Animesh", isPaid:false}

createUser4(newUser)  // Now Ok


function createCourse():{name: string, price: number}{
    return {
        name: "react js",
        price: 399
    }
}


createCourse()

// Type aliases:

type User = {
    name: string,
    email: string,
    isActive: boolean
}


function createUser5(user: User) : User{

    return {
        name: "",
        email: "",
        isActive: true
    }

}

createUser5({
    name: "Animesh",
    email: "a@gmail.com",
    isActive: true
})


// Readonly and Optional in TS:
type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean, 
    creditCardNumber: boolean
}


let myUser: User = {
    _id: "1234",
    name: "a",
    email: "a@a.com",
    isActive: true,
    creditCardNumber?: 123456789
}

type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

myUser.email = "h@gmail.com"
// myUser._id: "asa" // Not allowed as it's readonly


