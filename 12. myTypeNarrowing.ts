function detectType(val: number | string) {
    if(typeof val === 'string') {

        return val.toLocaleString()
    }

    return val+3
}

function provideId(id: string | null) {
    if(!id) {
        console.log("Please provide ID")
    }

    id?.toLocaleLowerCase()
}

function printAll(strs: string | string[] | null) {

    if(strs) {
        if(typeof strs === 'object') {
            for(const s of strs){
                console.log(s)
            }
        } else if(typeof strs === 'string') {
            console.log(strs)
        }
    }
}


function logValue(x: Date | string) {
    if(x instanceof Date) {
        console.log(x.toUTCString())
    } else {
        console.log(x.toUpperCase())
    }
}


// Using type predicates:

type Fish = {
    swim: () => Void
}

type Bird = {
    fly: () => Void
}


function isFish(pet: Fish | Bird) {
   return (pet as Fish).swim !== undefined
}

function isBird(pet: Fish | Bird) {
    return (pet as Bird).fly !== undefined
 }


 function getFood(pet: Fish | Bird) {
    if(isFish(pet)) {
        pet // Still TS is confused whethere Fish or Bird
        return "Fish Food"
    } else {
        pet // Still TS is confused whethere Fish or Bird
        return "bird food"
    }
 }




 function isFish2(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined
 }
 
 function isBird2(pet: Fish | Bird): pet is Bird {
     return (pet as Bird).fly !== undefined
  }
 
 
  function getFood2(pet: Fish | Bird) {
     if(isFish2(pet)) {
         pet // Fish 
         return "Fish Food"
     } else {
         pet // Bird
         return "bird food"
     }
  }


// Discriminated Union and Exhaustiveness Checking with never:

interface Circle {
    kind: "circle",
    radius: number
}


interface Sqaure {
    kind: "sqaure",
    side: number
}


interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Sqaure | Rectangle

function getTrueShape(shape: Shape) {
    if(shape.kind === 'circle') {
        return Math.PI * shape.radius
    } 
    // return shape.side * shape.side
}


function getArea(shape: Shape) {
    switch(shape.kind) {
        case "circle":
            return Math.PI * shape.radius
        case "sqaure": 
            return shape.side * shape.side
        case "rectangle": 
            return shape.length * shape.width
        default:
            const _defaultForShape: never = shape
            return _defaultForShape
    } 
}
