import { UseCase } from "../../lib/usecase";
import { UserService } from "./users.service";
import { CreateUserDTO } from "./dto/createUser.dto"
import { UserError } from "./user.errorhandler"
import { UserDTO } from "./dto/users.dto";
import { UserRepository } from "./users.repository";

type CreateUserResponse = UserError.UserNotCreated | UserError.ExistUser | UserDTO


export class CreateUserController implements UseCase<CreateUserDTO, Promise<CreateUserResponse>> {
    constructor(private userRepo: UserRepository) {}

    /**
     * 1. 이미 가입한 회원일 경우 에러
     * 2. 비밀번호 암호화
     * 3. 닉네임 중복 확인
     * 4. 레포지토리 -> createUser 실행
     */
    async execute(dto: CreateUserDTO): Promise<CreateUserResponse> {

        const existUser = await this.userRepo.exist(dto.email);

        if (existUser) {
            return new UserError.ExistUser('Already exist user!')
        }

        try {
            const saveUser = await this.userRepo.createUser(dto);
            return saveUser
        } catch(err) {
            throw new Error('Error!')
        } 
    } 
}