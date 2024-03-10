require("dotenv").config({ path: "./.env" });
const mongoose = require("mongoose");
const app = require("./app");
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("database connected");
});
console.log(process.env.PORT);
app.listen(process.env.PORT, () => {
  console.log("server Started");
});
