import { Router } from "express";
import { index, show, store, update, destroy } from "./Controller.js";

export const levelsRouter = Router();

levelsRouter.get("/", index);
levelsRouter.get("/:id", show);
levelsRouter.post("/", store);
levelsRouter.put("/:id", update);
levelsRouter.delete("/:id", destroy); 
