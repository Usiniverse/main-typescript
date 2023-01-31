import { create } from "domain";
import { UserDTO } from "./dto/users.dto";
import { UserService } from "./users.service";
import express from "express";

export class UserController {
    constructor(private userService : UserService) {}

    async createUser(req, res): Promise<void> {
        const { user_name, nickname, email, host } = req.body;
        const createUserInfo = await this.userService.createUser(req.body);

        return res.status(200).send(createUserInfo)
    }

    // getUser(id: number): Promise<UserDTO> {
    //     return this.userService.getUser();
    // }

    // getUsers(id: number): Promise<UserDTO[]> {
    //     return this.userService.getUsers();
    // }
}