import { Composer } from "grammy";
import MyContext from "../context";


const helpComposer = new Composer<MyContext>(); 

helpComposer.command("help", async (ctx) => {
    const answerText = "Hello, I am bot-moderator of chat t.me/self_topic_chat. My commands: \n/start - hello message\n/help - this message\n\nModerator commands: \n/mute [user] [multiplier] [time arg] - mute user\n/ban [user] - ban user\n/kick [user] - kick user\n/set_rules [rules] - update chat rules\n/change_welcome [text] - update text for new members\n/change_goodbye [text] - update text for left users"
    await ctx.reply(
        answerText
    );
})

export default helpComposer;