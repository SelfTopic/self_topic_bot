import { Composer } from "grammy";
import MyContext from "../../context";
import FindEntityService from "../../services/find.entity";

const banComposer = new Composer<MyContext>();

banComposer.command("ban", async (ctx) => {
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
        await ctx.reply(`User not found in database, but I try ban his`);
    
    await ctx.api.banChatMember(
        ctx.chat.id,
        restrictUserId
    );

    await ctx.reply(`User ${restrictUser?.first_name ?? "NoName"} is banned. Use /unban to unban user`);

    
})


banComposer.command("unban", async (ctx) => {
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
        await ctx.reply(`User not found in database, but I try unban his`);
    
    await ctx.api.unbanChatMember(
        ctx.chat.id,
        restrictUserId
    );

    await ctx.reply(`User ${restrictUser?.first_name ?? "NoName"} is unbanned.`);

    
})

export default banComposer;