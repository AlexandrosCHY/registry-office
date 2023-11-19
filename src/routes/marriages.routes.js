import express from "express";
import * as marriagesController from "../controllers/marriages.controller.js";
const mRouter = express.Router();

mRouter.get("/", marriagesController.list);

mRouter.post("/:id1/:id2", marriagesController.createMarriage);

mRouter.post("/:id", marriagesController.deleteMarriage);

export default mRouter;
