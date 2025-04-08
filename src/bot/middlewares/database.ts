import { NextFunction } from "grammy";
import MyContext from "../context";
import { db } from "../../database/database";
import { UserRepository } from "../repositories/user";
import { UserService } from "../services/user";
import { SyncEntityService } from "../services/sync.entity";


async function DatabaseMiddleware(
    ctx: MyContext,
    next: NextFunction
) {
    ctx.db = db;
    ctx.userRepository = new UserRepository(ctx.db);
    ctx.userService = new UserService(ctx.userRepository);
    ctx.syncEntityService = new SyncEntityService(ctx.userRepository);
    
    await next();
}

export default DatabaseMiddleware;