import { Router } from "express";
import { index, show } from "./Controller.js";

export const rolesRouter = Router();

rolesRouter.get("/", index);
rolesRouter.get("/:id", show); 
