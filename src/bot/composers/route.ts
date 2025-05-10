import { Bot } from "grammy";
import startComposer from "./start";
import moderatorComposer from "./moderator/route";
import MyContext from "../context";
import rulesComposer from "./check.rules";
import changeChatMemberTextComposer from "./moderator/change.member";
import chatMemberComposer from "./chat.member";
import helpComposer from "./help";

function include(bot: Bot<MyContext>): void {
    bot.use(startComposer);
    bot.use(helpComposer);
    
    bot.chatType("supergroup")
        .use(moderatorComposer);

    bot.chatType(['group', 'supergroup'])
        .use(rulesComposer);

    bot.chatType(['group', 'supergroup'])
        .use(changeChatMemberTextComposer);

    bot.chatType(['group', 'supergroup'])
        .use(chatMemberComposer);
}

export default include;