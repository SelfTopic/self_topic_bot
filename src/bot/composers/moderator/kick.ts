import { Composer } from "grammy";
import MyContext from "../../context";
import FindEntityService from "../../services/find.entity";

const kickComposer = new Composer<MyContext>();

kickComposer.command("kick", async (ctx) => {
    const findEntityService = new FindEntityService(ctx);
    const entity = findEntityService.findAll(ctx);
    let restrictUserId: number;

    if (!entity)
        return await ctx.reply("User not found");

    if (typeof entity === "string") {
        const user = await ctx.userService
            .getData({
                username: entity
            })

        if (!user)
            return await ctx.reply("User not found in database");

        restrictUserId = user.telegram_id;
    }

    else 
        restrictUserId = entity;

    const restrictUser = await ctx.userService
        .getData({
            telegramId: restrictUserId
        });

    if (!restrictUser) 
        await ctx.reply(`User not found in database, but I try kick his`);
    
    await ctx.api.banChatMember(
        ctx.chat.id,
        restrictUserId
    );
    await ctx.api.unbanChatMember(
        ctx.chat.id,
        restrictUserId
    );

    await ctx.reply(`User ${restrictUser?.first_name ?? "NoName"} is kicked`);

    
})

export default kickComposer;