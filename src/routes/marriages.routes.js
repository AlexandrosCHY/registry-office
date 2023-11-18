import express from "express";
import * as marriagesController from "../controllers/marriages.controller.js";
const mRouter = express.Router();

mRouter.get("/", marriagesController.list);

export default mRouter;
