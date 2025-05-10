import { Composer } from "grammy";
import MyContext from "../context";

const startComposer = new Composer<MyContext>()

startComposer.command("start", async (ctx) => {
    const user = await ctx.userService
        .getData({
            ctx // Maybe you just like to write this way, but it could be shortened.
        })

    // if no user condition + error handling.

    await ctx.reply(`Hello, ${user?.first_name} I'm Self Bot`);
});

export default startComposer;