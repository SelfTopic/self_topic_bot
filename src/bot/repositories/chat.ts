import { eq } from "drizzle-orm";
import Chat from "../../database/models/chat";
import { Repository } from "./base";
import { FindUserRepositoryParams } from "../types/find.user";

export class ChatRepository extends Repository {

    async upsert(
        telegramId: number,
        title: string,
        username?: string
    ) {

        const chat = await this.db.insert(Chat)
            .values(
                {
                    telegram_id: telegramId,
                    title: title
                }
            )
            .onConflictDoUpdate(
                {
                    target: Chat.telegram_id,
                    set: {
                        title: title,
                        username: username
                    }
                }
            )
            .returning()

        if (chat.length < 1)
            throw new Error(`Chat by telegram_id=${telegramId} not found`)

        return chat[0];
    }


    async getData(telegramId: number) {

        const chat = await this.db.select()
            .from(Chat)
            .where(
                eq(Chat.telegram_id, telegramId)
            )

        if (chat.length)
            return chat[0]
    }

    async changeRules (
        telegramId: number,
        newRules: string 
    ) {

        await this.db.update(Chat)
            .set(
                {
                    rules: newRules
                }
            )
    }

    async changeWelcome (
        telegramId: number,
        newWelcome: string
    ) {

        await this.db.update(Chat)
            .set(
                {
                    welcome_text: newWelcome
                }
            )
            .where(
                eq(Chat.telegram_id, telegramId)
            )
    }

    async changeGoodbye (
        telegramId: number,
        newGoodbye: string 
    ) {
        await this.db.update(Chat)
        .set(
            {
                goodbye_text: newGoodbye
            }
        )
        .where(
            eq(Chat.telegram_id, telegramId)
        )
    }
}

export default ChatRepository;