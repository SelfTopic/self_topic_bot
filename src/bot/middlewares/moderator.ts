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

        if (ctx.chat!.type !== "supergroup")
            return await ctx.reply("This chat type don't supported");

        if( member.status in ["administartor", "creator"] )
            await next();
    } catch {
        await ctx.reply("I is not administartor");
    }
}

export default ModeratorMiddleware;