import { NextFunction } from "grammy";
import MyContext from "../context";

async function ModeratorMiddleware(
    ctx: MyContext,
    next: NextFunction
) {

    try {
        const member = await ctx.api.getChatMember(
            ctx.chat!.id,
            ctx.from!.id
        );
// Try to write grammatically correctly. It can affect the impression of the program.
        if (ctx.chat!.type !== "supergroup")
            return await ctx.reply("This chat type don't supported"); // This chat type is not supported

        if( member.status in ["administartor", "creator"] ) // care about code formatting
            await next();
    } catch {
        await ctx.reply("I is not administartor"); // I am not administartor
    }
}

export default ModeratorMiddleware;