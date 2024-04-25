// Tuples:


const tuser: (string | number)[] = [1, "hc"]
const tuser2: (string | number)[] = ["hc", 123]

let tUser: [string, number, boolean]

tUser = ["hc", 123, true]

tUser = [123, "hc", true] // Order should be matched with type hence Not allowed

let rgb: [number, number, number] = [
    255, 123, 112
]

type tUser = [
    number, string
]

const newUser7: tUser = [
    112, "a@gmail.com"
]

newUser7[1] = "hc.com"
// newUser7.push(true) // can't do but 