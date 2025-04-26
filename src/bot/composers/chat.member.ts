import { Composer } from "grammy";
import MyContext from "../context";

const chatMemberComposer = new Composer<MyContext>()



chatMemberComposer.on(":new_chat_members:me", async (ctx) => {
    await ctx.reply("Thank you for adding me to the chat. To effectively assist with moderation, I require administrator privileges. Please provide them at your earliest convenience.")
})

chatMemberComposer.on(":new_chat_members", async (ctx) => {
    
    const chat = await ctx.chatService.getData(ctx.chat.id);

    const welcomeText = chat?.welcome_text;

    if (!welcomeText)
        return;

    await ctx.reply(`${welcomeText}`);
});


chatMemberComposer.on(":left_chat_member", async (ctx) => {

    const chat = await ctx.chatService.getData(ctx.chat.id);

    const goodbyeText = chat?.goodbye_text;;

    if (!goodbyeText)
        return;

    await ctx.reply(`${goodbyeText}`);
})

export default chatMemberComposer;