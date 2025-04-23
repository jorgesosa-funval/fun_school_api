import { Router } from "express";
import { index, show, store, update, destroy } from "./Controller.js";

export const teachersRouter = Router();

teachersRouter.get("/", index);
teachersRouter.get("/:id", show);
teachersRouter.post("/", store);
teachersRouter.put("/:id", update);
teachersRouter.delete("/:id", destroy); 
