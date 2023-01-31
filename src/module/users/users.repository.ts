import knex from "knex";
import { CreateUserDTO } from "./dto/createUser.dto";
import * as bcrypt from "bcryptjs"

export class UserRepository {
    async createUser(user: CreateUserDTO): Promise<any> {
        // const { user_name, nickname, email, host, password } = user;

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(user.password, salt);

        const userInfo = { ...user, password: hashedPassword }

        if (!user) {
            throw new Error('Invalid user Informations')
        }

        try {
            return await knex('users').insert(userInfo);
        } catch(err) {
            throw new Error('Create user failed')
        }
    }

    async exist(email: string): Promise<boolean> {
        return await knex('users')
            .select('*')
            .where({ email })
            .first()
            .then((user) => !!user);
    }
}