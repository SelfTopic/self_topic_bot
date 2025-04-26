import { UserRepository } from "../repositories/user";
import { ChatRepository } from "../repositories/chat";

export class Service {
    userRepository: UserRepository
    chatRepository: ChatRepository

    constructor(
        userRepository: UserRepository,
        chatRepository: ChatRepository
    ) {
        this.userRepository = userRepository;
        this.chatRepository = chatRepository;
    }
}