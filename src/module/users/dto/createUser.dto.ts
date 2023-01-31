export interface CreateUserDTO {
    id: number;
    user_name: string;
    nickname: string;
    email: string;
    host?: boolean;
    password: string;
}