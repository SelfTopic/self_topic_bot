import { NextFunction } from "grammy";
import MyContext from "../context";

export async function SyncEntityMiddleware(
    ctx: MyContext,
    next: NextFunction
) {
    await ctx.syncEntityService.sync(ctx);
    await next();
}