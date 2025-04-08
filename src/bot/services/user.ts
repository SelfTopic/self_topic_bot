import MyContext from "../context";
import { FindUserServiceParams, FindUserRepositoryParams } from "../types/find.user";
import { Service } from "./base";


export class UserService extends Service {
    
    async getData(params: FindUserServiceParams) {
        let findUserParams: FindUserRepositoryParams = {
            userId: params.userId,
            telegramId: params.telegramId,
            username: params.username
        }

        if (params.ctx?.from){
            if (params.ctx.from.id)
                findUserParams.telegramId = params.ctx.from.id
            else if (params.ctx.from.username)
                findUserParams.username = params.ctx.from.username

        const user = await this.userRepository
            .get_data(findUserParams);

        return user;
    }}
        

}