import { Bot } from "grammy";
import MyContext from "./context";
import config from "./utils/config";
import include from "./composers/route";

const bot = new Bot<MyContext>(config.BOT_TOKEN)

include(bot)

export default bot;