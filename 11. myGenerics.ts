// Generics is one such things which makes our component reusable

// Component doesn't mean here react component or any other component it means there is a chunk of something it can be a Tailwind chunk, it can be react or it can be just a function so understand that point.


const scoree: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
    return val
}

function identityTwo(val: any): any {
    return val
}


function identityThree<Type>(val: Type): Type {
    return val
}

// Type is locked at first place only

identityThree(3) // Hover and check
identityThree("3") // Hover and check
identityThree(true) // Hover and check

function identityFour<T>(val: T): T {
    return val
}


interface Bottle {
    brand: string,
    type: number
}

identityFour<Bottle>({
    brand: "Apple",
    type: 123
})


function getSearchProducts<T>(products: T[]): T {

    // do some db operations
    const myIndex = 3
    return products[myIndex]
}

// Arrow Functions:
const getMoreSearchProducts = <T>(products: T[]):T => {
    // do some db operations
    const myIndex = 4
    return products[myIndex]
}

const getMoreeSearchProducts = <T,>(products: T[]):T => {
    // do some db operations
    const myIndex = 4
    return products[myIndex]
}

// Note: In <T,> , comma (,) indicates that it's a generic type not a JSX syntax

// Generic Classes:


function anotherFunction<T, U extends number>(valOne:T, valTwo:U): object {
    return {
        valOne,
        valTwo
    }
}

// anotherFunction(3, "4") // Not allowed as it should be number

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction2<T, U extends Database>(valOne:T, valTwo:U): object {
    return {
        valOne,
        valTwo
    }
}

anotherFunction2(3, {connection: "", username:"", password:"password"})

// Generic Classes:

interface Quiz {
    name: string,
    type: string
}


interface Course {
    name: string,
    author: string,
    subject: string
}

class Sellable<T> {
    public cart: T[] = []

    addToCart(product: T) {
        this.cart.push(product)
    }

}