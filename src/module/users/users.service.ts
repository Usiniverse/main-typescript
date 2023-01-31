import knex from "knex";
import { UserDTO } from "./dto/users.dto";
import { UserRepository } from "./users.repository"

export class UserService {
    constructor(private userDTO: UserDTO, private userRepository: UserRepository) {}

    async createUser(user: UserDTO): Promise<void> {
        return this.userRepository.createUser(user)
    }

    // async getUser(id: number) {
    //     const find = await knex('users').select('*').where(id)

    //     console.log(find);

    //     return find
    // }
}