import { Bot } from "grammy";
import startComposer from "./start";
import moderatorComposer from "./moderator/route";
import MyContext from "../context";

function include(bot: Bot<MyContext>): void {
    bot.use(startComposer);
    
    bot
    .chatType("supergroup")
    .use(moderatorComposer);
}

export default include;