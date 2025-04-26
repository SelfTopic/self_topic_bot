import { eq } from "drizzle-orm";
import User from "../../database/models/user";
import { Repository } from "./base";
import { FindUserRepositoryParams } from "../types/find.user";

export class UserRepository extends Repository {

    async upsert(
        telegramId: number,
        firstName: string,
        lastName: string | undefined,
        username: string | undefined
    ) {

        const user = await this.db.insert(User)
            .values(
                {
                    telegram_id: telegramId,
                    first_name: firstName,
                    last_name: lastName,
                    username: username
                }
            )
            .onConflictDoUpdate(
                {
                    target: User.telegram_id,
                    set: {
                        first_name: firstName,
                        last_name: lastName,
                        username: username
                    }
                }
            )
            .returning()
            // I'd rather using .single() or .limit(1) to get only object in user. 
            // Because technically you have array of users and the var should be called users/

        if (!user.length)
            throw new Error(`User by telegram_id=${telegramId} not found`)

        return user[0];
    }

    async get_data(params: FindUserRepositoryParams) {
        // if you descruct params, code will be more clear 
        // cosnt { userId, telegramId, username } = params;
        // too much repeating and logic below, I recommend to refactor conditions.
        if (params.userId) {
            const user = await this.db.select()
                .from(User).
                where(
                    eq(User.id, params.userId)
                )

            if (user.length)
                return user[0];
        } else if (params.telegramId) {
            const user = await this.db.select()
                .from(User).
                where(
                    eq(User.telegram_id, params.telegramId)
                )

            if (user.length)
                return user[0];
        } else if (params.username) {
            const user = await this.db.select()
                .from(User).
                where(
                    eq(User.username, params.username)
                )

            if (user.length)
                return user[0];
        } else {
            throw new Error("Arguments not found")
        }
    }
}