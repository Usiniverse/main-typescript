import express from "express";
import { UserController } from "../module/users/users.controller"

export const userController = new UserController();

const userRouter = express.Router()

userRouter.post("/users", (req, res) => {
    const userController = new UserController()
    return userController
})

export default userRouter;