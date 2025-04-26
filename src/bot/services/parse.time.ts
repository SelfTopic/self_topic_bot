import MyContext from "../context";


interface Dict {
    [key: string]: number
}

const KeyWordsTime: Dict = {
    "m": 60,
    "h": 60*60,
    "d": 60*60*24
}

class ParseTimeService {
    ctx: MyContext 

    constructor(ctx: MyContext) {
        this.ctx = ctx;
    }

    findNumber(ctx: MyContext = this.ctx) {
        const words = ctx.message!.text!;

        for (const word of words.split(" ")) {
            if (parseInt(word))
                return parseInt(word)
        }
        return null;

    }

    findKeyTime(ctx: MyContext = this.ctx) {

        
        const words = ctx.message!.text!;

        for (const word of words.split(" ")) {
            if (KeyWordsTime.hasOwnProperty(word)) {
                return KeyWordsTime[word]
            }
        }
        return null;
    }
}

export default ParseTimeService;