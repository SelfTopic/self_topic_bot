import { Composer } from "grammy";
import MyContext from "../../context";

const changeChatMemberTextComposer = new Composer<MyContext>();

changeChatMemberTextComposer.command("change_welcome", async (ctx) => {
    const messageText = ctx.message?.text;

    const welcomeText = messageText?.split("/change_welcome")[1];

    if (!welcomeText) 
        return await ctx.reply("Welcome text not found");

    await ctx.chatService
        .changeWelcome(
            ctx.chat.id,
            welcomeText
        );

    await ctx.reply("Welcome text edited");
})

changeChatMemberTextComposer.command("change_goodbye", async (ctx) => {
    const messageText = ctx.message?.text;

    const goodbyeText = messageText?.split("/change_goodbye")[1];

    if (!goodbyeText) 
        return await ctx.reply("Welcome text not found");

    await ctx.chatService
        .changeGoodbye(
            ctx.chat.id,
            goodbyeText
        );

    await ctx.reply("Goodbye text edited");
})

export default changeChatMemberTextComposer;