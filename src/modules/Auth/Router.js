import { Router } from "express";
import { changePassword, login, register, logout } from "./Controller.js";
import authMiddleware from "#src/middlewares/authMiddleware.js";

export const authRouter = Router();

authRouter.post("/login", login);
authRouter.put("/change-password", authMiddleware, changePassword);
authRouter.post("/register", register);
authRouter.get("/logout", logout);

