import { User } from "grammy/types";
import MyContext from "../context";


class FindEntityService {
    ctx: MyContext

    constructor(ctx: MyContext) {
        this.ctx = ctx
    }

    findIdToReplyMessage(ctx: MyContext = this.ctx): number | null {
        const replyMessage = ctx.message?.reply_to_message

        if (!replyMessage)
            return null;

        if (!replyMessage.from)
            return null;

        return replyMessage.from.id;
    }

    findIdFromEntity(ctx: MyContext = this.ctx): number | null {

        const messageEntites = ctx.message?.entities

        if (!messageEntites || messageEntites?.length == 0)
            return null;

        const firstEntity = messageEntites[0]

        let user: User;
        if (firstEntity.type === "text_mention")
            user = firstEntity.user

        else 
            return null;

        return user.id;
        
    }

    findIdOnText(ctx: MyContext = this.ctx): number | null {
        const messageText = ctx.message?.text;

        if (!messageText) {
            return null;
        }

        const words = messageText.split(' ');

        for (const word of words) {
            const parsedInt = parseInt(word);
            if (!isNaN(parsedInt) && word.length >= 6) {
                return parsedInt;
            }
        }

        return null;
    }
}

export default FindEntityService;