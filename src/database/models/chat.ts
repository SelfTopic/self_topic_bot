import { pgTable, text, bigint, serial, integer } from "drizzle-orm/pg-core";

const Chat = pgTable('chats', {
    id: serial()
    .primaryKey(),

    telegram_id: bigint("telegram_id", { mode: "number" })
        .notNull().unique(),
    title: text().notNull(),
    username: text(),
    rules: text(),
    welcome_text: text(),
    goodbye_text: text()
});

export default Chat;