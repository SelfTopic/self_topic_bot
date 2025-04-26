import MyContext from "../context";
import { Service } from "./base";


export class SyncEntityService extends Service {

    async sync(ctx: MyContext): Promise<boolean> {
        if (ctx.message?.from) {
            const user = ctx.message.from;
            await this.userRepository 
                .upsert(
                    user.id,
                    user.first_name,
                    user.last_name,
                    user.username
                )

            if (ctx.chat?.type === "supergroup" || ctx.chat?.type === "group") {
                await this.chatRepository.upsert(
                    ctx.chat.id,
                    ctx.chat.title,
                    ctx.chat.username
                )
            }
            return true; 

        } else if (ctx.callbackQuery?.from) {
            const user = ctx.callbackQuery.from;
            await this.userRepository
                .upsert(
                    user.id,
                    user.first_name,
                    user.last_name,
                    user.username
                )
            return true; 

        } else if (ctx.inlineQuery?.from) {
            const user = ctx.inlineQuery.from;
            await this.userRepository
                .upsert(
                    user.id,
                    user.first_name,
                    user.last_name,
                    user.username
                )
            return true;
        } else { 
            console.log("User not sync. Arguments not found");
            return false 
        }
    }
}

export default SyncEntityService;