import { UserRepository } from "./users.repository"
import { CreateUserDTO } from "./dto/createUser.dto"

export class UserService {
    constructor(private userRepository: UserRepository) {}

    async createUser(user: CreateUserDTO): Promise<void> {
        return this.userRepository.createUser(user)
    }
}