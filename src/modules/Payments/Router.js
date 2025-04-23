import { Router } from "express";
import { index, show, store, update, destroy } from "./Controller.js";

export const paymentsRouter = Router();

paymentsRouter.get("/", index);
paymentsRouter.get("/:id", show);
paymentsRouter.post("/", store);
paymentsRouter.put("/:id", update);
paymentsRouter.delete("/:id", destroy); 
