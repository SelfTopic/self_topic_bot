import { NextFunction } from "grammy";
import MyContext from "../context";

async function LoggingMiddleware(
    ctx: MyContext,
    next: NextFunction
) {
    const afterTime = new Date();
    await next();
    const beforeTime = new Date();

    console.log(
        `New update on ${beforeTime.getMilliseconds() - afterTime.getMilliseconds()} ms`
    );
}

export default LoggingMiddleware;