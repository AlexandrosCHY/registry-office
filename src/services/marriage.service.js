import * as db from "./db.services.js";

export const getMarriagePeoples = async () => {
  const result = await db.query(
    "SELECT * FROM people WHERE spouse IS NOT NULL"
  );
  return result.rows;
};

export const addMarriage = async (id1, id2) => {
  try {
    const result1 = await db.query("SELECT id FROM people WHERE id = $1", [
      id1,
    ]);
    const spouseId1 = result1.rows[0].id;
    const result2 = await db.query("SELECT id FROM people WHERE id =  $1", [
      id2,
    ]);
    const spouseId2 = result2.rows[0].id;
    await db.query("UPDATE people SET spouse = $1 WHERE id = $2", [
      spouseId1,
      id2,
    ]);
    await db.query("UPDATE people SET spouse = $1 WHERE id = $2", [
      spouseId2,
      id1,
    ]);

    return result1.rows, result2.rows;
  } catch (error) {
    console.error(error.massage);
  }
};

export const destroyMarriage = async (id1) => {
  const result = await db.query("SELECT id FROM people WHERE id = $1 ", [id1]);
  const id = result.rows[0].id;

  await db.query("UPDATE people SET spouse = NULL WHERE spouse = $1", [id]);
  await db.query("UPDATE people SET spouse = NULL WHERE id = $1", [id]);
  return result.rows;
};
