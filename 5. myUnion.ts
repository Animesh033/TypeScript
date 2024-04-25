let score: number | string = 33

score = 44 // can do this

score = "55" // also can do this

type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let animesh: User | Admin = {
    name: "animesh",
    id: 123,
    // username: ""
}

animesh = {username: "ani", id: 123}

function getDbId(id: number | string) {
    //making some API calls
    console.log(`DB id is:  ${id}`)
}


function getDbId2(id: number | string) {
    if(typeof id === "string") {
        id.toLowerCase()
    } else {
        id++
    }
}

// Note: id here is type of number or string but without identifying the type of id we can't apply any string or number functions on it as it acts as different type (string or number)

// array

const data: number[] = [
    1, 2, 3
]

const data2: string[] = [
    "1", "2", "3"
]

const data3: string[] | number[] = [
    "1", "2", "3"
]

// data3: string[] | number[] means it will be either all numbers or all strings

const data4: (string | number)[] = [
    "1", "2", 3
]

// data4 can have string and number both but mostly we don't do like that

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
seatAllotment = "crew" // This is not allowed as it can be any one from "aisle" | "middle" | "window"


