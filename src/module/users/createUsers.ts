import knex from "knex"
import express from "express"
import Joi from "joi";

export class CreateUser {
    static async userValidation() {
        const userValidator = Joi.object().keys({
            password: Joi.string().min(4).max(12).required(),
            userName: Joi.string().required(),
            email: Joi.string().required()
        })
    }

    public static async saveUser(req: express.Request, res: express.Response) {
        const { userName, nickname, email, host } = req.body
        console.log(userName);

        if (!CreateUser.userValidation()) {
            '모든 입력 내용을 확인해주세요!'
        }

        try {
            return knex('user')
                .insert({ userName, nickname, email, host })
                .into('users')
                .onConflict()
                .merge()
        } catch (err) {
            throw new Error('회원 가입에 실패했습니다!')
        }
    }
}

const userValidation = () => {
            const userValidator = Joi.object().keys({
                password: Joi.string().min(4).max(12).required(),
                userName: Joi.string().required(),
                email: Joi.string().required()
            })
        }

export const createUser = (req: express.Request, res: express.Response) => {

    if (!userValidation) {
        '모든 입력 내용을 확인해주세요!'
    }
    console.log('통과 체크');
    
    try {
        return knex('users')
            .insert({ ...req })
    } catch (err) {
        throw new Error('회원 가입에 실패했습니다!')
    }
}

export default {
    createUser
}