abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) {

    }

    abstract getSepia(): void

    getReelTime(): number {
        return 8
    }
}

// const tp = new TakePhoto("test", "TEST") // Can't create from Abstract class


class Instagram extends TakePhoto {

    constructor(

        public cameraMode: string,
        public filter: string
        public burst: number
    ) {
        super(cameraMode, filter)

    }

    getSepia(): void {
        console.log("Sepia")
    }

}

const insta = new Instagram("TEST", "test", 123)

insta.getSepia()

