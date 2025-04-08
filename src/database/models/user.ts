import { pgTable, text, bigint, serial, integer } from "drizzle-orm/pg-core";

const User = pgTable('users', {
    id: serial()
    .primaryKey(),

    telegram_id: bigint("telegram_id", { mode: "number" })
        .notNull().unique(),
    first_name: text().notNull(),
    last_name: text(),
    username: text(),
    balance: integer().notNull().default(0)
});

export default User;