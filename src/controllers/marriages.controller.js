import {
  getMarriagePeoples,
  addMarriage,
  destroyMarriage,
} from "../services/marriage.service.js";
import { destroy } from "./people.controller.js";

export const list = async (req, res) => {
  const marriagePeoples = await getMarriagePeoples();
  res.json(marriagePeoples);
};

export const createMarriage = async (req, res) => {
  const { id1, id2 } = req.params;
  const newMarriage = await addMarriage(id1, id2);
  res.json(newMarriage);
};

export const deleteMarriage = async (req, res) => {
  const id1 = req.params.id;
  const deletedMarriage = await destroyMarriage(id1);
  res.json(deletedMarriage);
};
