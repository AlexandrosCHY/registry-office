import express from "express";
import * as PeopleController from "../controllers/people.controller.js";
const router = express.Router();

router.get("/", PeopleController.list);

router.get("/:id", PeopleController.getById);

router.post("/", PeopleController.add);

router.delete("/:id", PeopleController.destroy);
export default router;
