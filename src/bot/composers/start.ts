import { Composer } from "grammy";
import MyContext from "../context";

const startComposer = new Composer<MyContext>()

startComposer.command("start", async (ctx) => {
    const user = await ctx.userService
        .getData({
            ctx: ctx
        })

    await ctx.reply(`Hello, ${user?.first_name} I'm Self Bot`);
});

export default startComposer;