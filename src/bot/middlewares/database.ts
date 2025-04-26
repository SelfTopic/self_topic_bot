import { NextFunction } from "grammy";
import MyContext from "../context";
import { db } from "../../database/database";

import UserRepository from "../repositories/user";
import ChatRepository from "../repositories/chat";

import UserService from "../services/user";
import SyncEntityService from "../services/sync.entity";
import ChatService from "../services/chat";


async function DatabaseMiddleware(
    ctx: MyContext,
    next: NextFunction
) {
    ctx.db = db;
    ctx.userRepository = new UserRepository(ctx.db);
    ctx.chatRepository = new ChatRepository(ctx.db);

    ctx.userService = new UserService(
        ctx.userRepository,
        ctx.chatRepository
    );
    ctx.chatService = new ChatService(
        ctx.userRepository,
        ctx.chatRepository
    );
    ctx.syncEntityService = new SyncEntityService(
        ctx.userRepository,
        ctx.chatRepository
    );
    
    await next();
}

export default DatabaseMiddleware;