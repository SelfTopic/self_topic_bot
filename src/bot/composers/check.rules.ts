import { Composer } from "grammy";
import MyContext from "../context";

const rulesComposer = new Composer<MyContext>()

rulesComposer.command("rules", async (ctx) => {
    
    const chat = await ctx.chatService.getData(ctx.chat.id);
    const rules = chat?.rules;

    if (!rules)
        return await ctx.reply(`Rules not found in this chat`)

    await ctx.reply(`${rules}`);
});

export default rulesComposer;