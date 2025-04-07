import { Composer } from "grammy";
import MyContext from "../context";

const startComposer = new Composer<MyContext>()

startComposer.command("start", async (ctx) => {
    await ctx.reply("Hello, I'm Self Bot");
});

export default startComposer;