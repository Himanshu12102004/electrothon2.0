const express = require("express");
const CustomError = require("./utils/errors/CustomError");
const cors = require("cors");
const errorHandlerMiddleware = require("./utils/errors/errorMiddleware");
const signUp = require("./controllers/signUp");
const app = express();
app.use(express.json());
app.use(cors());
app.post("/signup", signUp);
app.all("*", (req, res, next) => {
  console.log("dhfjdhfj");
  const err = new CustomError("Page not found", 404);
  next(err);
});

app.use(errorHandlerMiddleware);
module.exports = app;
