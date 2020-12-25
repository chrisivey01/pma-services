import { Router } from "express";
const userRouter = Router();
import { getUsers } from "../database/modules/users.js";

userRouter.get("/users", (req, res, next) => {
    getUsers().then(data => {
        if (data.length > 0) {
            res.json(data);
        } else {
            res.status(404).json({ message: "Not Found" });
        }
    })
});

export default userRouter;
