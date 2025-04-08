import { UserRepository } from "../repositories/user";

export class Service {
    userRepository: UserRepository

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }
}