import { Composer } from "grammy";
import MyContext from "../../context";
import FindEntityService from "../../services/find.entity";
import ParseTimeService from "../../services/parse.time";

export const muteComposer = new Composer<MyContext>();

muteComposer.command("mute", async (ctx) => {
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
        await ctx.reply(`User not found in database, but I try mute his`);

    const time: number = 0;
    const words = ctx.message!.text.split(" ");

    const timeService = new ParseTimeService(ctx);

    const multiplier = timeService.findNumber() ?? 1;
    const seconds = timeService.findKeyTime() ?? 1;


    const timeMute = multiplier * seconds;
    
    await ctx.api.restrictChatMember(
        ctx.chat.id,
        restrictUserId,
        {
            can_send_messages: false
        },
        {
            until_date: timeMute
        }
    );

    await ctx.reply(`User ${restrictUser?.first_name ?? "NoName"} is mute. Use /unmute for unmute user`);

    
})

muteComposer.command("unmute", async (ctx) => {
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
        await ctx.reply(`User not found in database, but I try unmute his`);

    await ctx.api.restrictChatMember(
        ctx.chat.id,
        restrictUserId,
        {
            can_send_messages: true,
            can_send_audios: true,
            can_send_documents: true,
            can_send_other_messages: true,
            can_send_photos: true,
            can_send_polls: true,
            can_send_video_notes: true,
            can_send_videos: true,
            can_send_voice_notes: true
        }
    );

    await ctx.reply(`User ${restrictUser?.first_name ?? "NoName"} is unmute. `);

    
})

export default muteComposer;
