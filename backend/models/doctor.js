const mongoose = require("mongoose");
const schema = mongoose.Schema({
  registrationNo: { type: String },
  email: { type: String },
  addressOfHospital: { type: String },
  phoneNo: { type: String },
  password: { type: String },
});
module.exports = mongoose.model("doctors", schema);
