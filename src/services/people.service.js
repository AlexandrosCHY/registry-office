import * as db from "./db.services.js";

export const getAllPeople = async () => {
  const result = await db.query("SELECT * FROM people");
  return result.rows;
};

export const getPersonByID = async (id) => {
  const result = await db.query("SELECT * FROM people WHERE id = $1", [id]);
  return result.rows;
};

export const addPerson = async (person) => {
  const result = await db.query(
    "INSERT INTO people ( date_of_birth, first_name, last_name, gender) VALUES ($1, $2, $3, $4) RETURNING *",
    [person.date_of_birth, person.first_name, person.last_name, person.gender]
  );
  return result.rows;
};

export const deletePerson = async (id) => {
  const result = await db.query("DELETE FROM people WHERE id = $1", [id]);
  return result.rows;
};
