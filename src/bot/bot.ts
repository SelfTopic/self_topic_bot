import { Bot } from "grammy";
import MyContext from "./context";
import config from "./utils/config";
import include from "./composers/route";
import LoggingMiddleware from "./middlewares/logging";
import DatabaseMiddleware from "./middlewares/database";
import { SyncEntityMiddleware } from "./middlewares/sync.entity";

const bot = new Bot<MyContext>(config.BOT_TOKEN);

bot.use(LoggingMiddleware);
bot.use(DatabaseMiddleware);
bot.use(SyncEntityMiddleware);
include(bot)
console.log("Bot initialize")
export default bot;