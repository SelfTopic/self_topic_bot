import MyContext from "../context";
import { FindUserServiceParams, FindUserRepositoryParams } from "../types/find.user";
import { Service } from "./base";


export class ChatService extends Service {
    
    async getData(telegramId: number) {

        const chat = await this.chatRepository
            .getData(telegramId);


        return chat;
    }
        

    async changeRules(
        telegramId: number,
        newRules: string 
    ) {
        await this.chatRepository.changeRules(
            telegramId,
            newRules
        )
    }

    async changeWelcome(
        telegramId: number,
        newWelcome: string
    ) {
        await this.chatRepository.changeWelcome(
            telegramId,
            newWelcome
        );
    }

    async changeGoodbye(
        telegramId: number,
        newGoodbye: string
    ) {
        await this.chatRepository.changeGoodbye(
            telegramId,
            newGoodbye
        );
    }
    

}

export default ChatService;