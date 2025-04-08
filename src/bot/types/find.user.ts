import MyContext from "../context"

export interface FindUserRepositoryParams {
    userId?: number
    telegramId?: number,
    username?: string
}

export interface FindUserServiceParams {
    userId?: number
    telegramId?: number,
    username?: string
    ctx?: MyContext
}