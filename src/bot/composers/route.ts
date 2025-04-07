import { Bot } from "grammy";
import startComposer from "./start";

function include(bot: Bot): void {
    bot.use(startComposer);
}

export default include;