import * as dotenv from "dotenv";

dotenv.config();

class Config{
    BOT_TOKEN: string 

    constructor() {
        if (!process.env.BOT_TOKEN) 
            throw new Error("Token not found");

        this.BOT_TOKEN = process.env.BOT_TOKEN;
    };
};

const config = new Config();
export default config;