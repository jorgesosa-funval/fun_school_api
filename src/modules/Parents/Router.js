import { Router } from "express";
import { index, show, store, update, destroy } from "./Controller.js";

export const parentsRouter = Router();

parentsRouter.get("/", index);
parentsRouter.get("/:id", show);
parentsRouter.post("/", store);
parentsRouter.put("/:id", update);
parentsRouter.delete("/:id", destroy); 
