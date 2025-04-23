import { Router } from "express";
import { index, show, store, update, destroy } from "./Controller.js";

export const coursesRouter = Router();

coursesRouter.get("/", index);
coursesRouter.get("/:id", show);
coursesRouter.post("/", store);
coursesRouter.put("/:id", update);
coursesRouter.delete("/:id", destroy); 
