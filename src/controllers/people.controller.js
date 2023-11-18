import {
  getAllPeople,
  getPersonByID,
  addPerson,
  deletePerson,
} from "../services/people.service.js";

export const list = async (req, res) => {
  const peoples = await getAllPeople();
  res.json(peoples);
};

export const getById = async (req, res) => {
  const id = req.params.id;
  const person = await getPersonByID(id);
  res.json(person);
};

export const add = async (req, res) => {
  const { date_of_birth, first_name, last_name, gender } = req.body;

  const newPerson = await addPerson({
    date_of_birth,
    first_name,
    last_name,
    gender,
  });
  res.status(201).json(newPerson);
};

export const destroy = async (req, res) => {
  const deletedPerson = await deletePerson(req.params.id);
  res.send({ ok: "OK" });
};
