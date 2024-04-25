class UserClass2 {

    // private _courseCount = 1 // Private prop is not accessible in SubUser Class so need to make it as protected

     protected _courseCount = 1

    readonly city: string = "Khagaria"
    constructor(
        public email: string, 
        public name:string,
        // private userId: string
    ) {
        
    }

    private deleteToken() {
        console.log("Token deleted")
    }

    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    // Setters should not have return type mentioned 
    // set courseCount(courseNum): void {}
    set courseCount(courseNum) { 
        if(courseNum <=1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
 }

 class SubUser extends UserClass2 {
    isFaimly: boolean = true //by default public i.e public isFaimly: boolean = true

    changeCourseCount(courseNum) {
        this._courseCount = courseNum
    }

 }
const ani2 = new UserClass2("a@a.com", "anie")

// ani2.deleteToken() //deleteToken() is not accessible outside the class as Private property 

