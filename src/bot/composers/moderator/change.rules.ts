import { Composer } from "grammy";
import MyContext from "../../context";

export const changeRulesComposer = new Composer<MyContext>();

changeRulesComposer.command("set_rules", async (ctx) => {
    const messageText = ctx.message?.text;

    const rules = messageText?.split("/set_rules")[1];

    if (!rules)
        return await ctx.reply(`Rules not found`);

    await ctx.chatService.changeRules(
        ctx.chat.id,
        rules
    )

    await ctx.reply(`Rules changed. Use /rules to check rules`);
})

export default changeRulesComposer;