import express from "express";
// import { userController } from "../controller/users/index"

// const user = new userController(userService)

const userRouter = express.Router()

userRouter.post("/users", (req, res) => {
    const { user_name, nickname, email, host } = req.body;

    console.log(userController)

    return req
})

export default userRouter;