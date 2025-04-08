import { UserRepository } from './repositories/user';
import { Context } from "grammy";
import { db } from "../database/database";
import { UserService } from './services/user';
import { SyncEntityService } from './services/sync.entity';

type MyContext = Context & {
    db: typeof db
    userRepository: UserRepository
    userService: UserService
    syncEntityService: SyncEntityService
}

export default MyContext;