import { UserInterface } from './../apihub/examples/apps/chat-app/web/react-vite-tailwind/src/interfaces/user';
interface UserInterface {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrail: () => string
    startTrail(): string,
    getCoupon(couponName: string, value: number): number //<-This tells that function should return number
}

let abhi: UserInterface = {
    dbId: 22,
    email: "a@abhi.com",
    userId: 211,
    startTrail: () => {
        return "Trail started!"
    },
    getCoupon: (cup="ani10", off: 10) => {
        return 10
    }
}

abhi.email = "abhi@g.com"

// abhi.dbId = 33 // Can't change as readonly

// Interface Vs Type:

// Lets assume that UserInterface is coming from any 3rd part package and we need more fields to be added for new feature so we can add in the interface


// Reopening of the interface:
interface UserInterface {
    githubToken: string
}

// Interface inheritance:

interface AdminInterface extends UserInterface {
    role: "admin" | "ta" | "learning"
}


let abhi2: AdminInterface = {
    dbId: 22,
    email: "a@abhi.com",
    userId: 211,
    role: "admin",
    startTrail: () => {
        return "Trail started!"
    },
    getCoupon: (cup="ani10", off: 10) => {
        return 10
    }
}