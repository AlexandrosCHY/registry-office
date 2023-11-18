import express from "express";
import peopleRouter from "./src/routes/people.routes.js";
import marriagesRouter from "./src/routes/marriages.routes.js";

const app = express();

app.use(express.json());

app.use("/people", peopleRouter);

app.use("/marriages", marriagesRouter);

app.listen(3000, () => {
  console.log("Server is listening...");
});
