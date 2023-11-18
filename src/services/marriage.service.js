import * as db from "./db.services.js";

export const getMarriagePeoples = async () => {
  const result = await db.query(
    "SELECT * FROM people WHERE spouse IS NOT NULL"
  );
  return result.rows;
};
