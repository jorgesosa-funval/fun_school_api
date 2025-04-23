import { Router } from "express";
import { index, show, store, update, destroy } from "./Controller.js";

export const studentsRouter = Router();

studentsRouter.get("/", index);
studentsRouter.get("/:id", show);
studentsRouter.post("/", store);
studentsRouter.put("/:id", update);
studentsRouter.delete("/:id", destroy); 
