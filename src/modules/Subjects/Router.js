import { Router } from "express";
import { index, show, store, update, destroy } from "./Controller.js";

export const subjectsRouter = Router();

subjectsRouter.get("/", index);
subjectsRouter.get("/:id", show);
subjectsRouter.post("/", store);
subjectsRouter.put("/:id", update);
subjectsRouter.delete("/:id", destroy); 
