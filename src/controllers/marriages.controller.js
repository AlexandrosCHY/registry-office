import { getMarriagePeoples } from "../services/marriage.service.js";

export const list = async (req, res) => {
  const marriagePeoples = await getMarriagePeoples();
  res.json(marriagePeoples);
};
