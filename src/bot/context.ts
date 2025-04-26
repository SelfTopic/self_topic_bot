import { UserRepository } from './repositories/user';
import { Context } from "grammy";
import { db } from "../database/database";
import UserService from './services/user';
import SyncEntityService from './services/sync.entity';
import ChatService from './services/chat';
import ChatRepository from './repositories/chat';

type MyContext = Context & {
    db: typeof db
    userRepository: UserRepository
    chatRepository: ChatRepository
    userService: UserService
    syncEntityService: SyncEntityService
    chatService: ChatService
}

export default MyContext;