// class User {
//     public email: string
//     private name: string // #name: string
//     readonly city: string = "Khagaria"
//     constructor(email: string, name:string) {
//         this.email = email
//         this.name = name
//     }
// }


class UserClass {
    readonly city: string = "Khagaria"
    constructor(
        public email: string, 
        public name:string,
        // private userId: string
    ) {
        this.email = email
        this.name = name
    }
}
const ani = new UserClass("a@a.com", "anie")

