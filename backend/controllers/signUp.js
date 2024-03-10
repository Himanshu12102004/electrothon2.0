const doctor = require("../models/doctor");
const CustomError = require("../utils/errors/CustomError");
const asyncErrorHandler = require("../utils/errors/asyncErrorHandler");
const Response = require("../utils/response/responseClass");
const createJwt = require("../utils/security/jwt/createJwt");
const signUp = asyncErrorHandler(async (req, res, next) => {
  const { email, password, registrationNo, phoneNo, hospitalAddress } =
    req.body;
  if (!email) {
    throw new CustomError("Noemail", 400);
  }
  if (!password) {
    throw new CustomError("NoPassword", 400);
  }
  if (!registrationNo) {
    throw new CustomError("NoRegistrationNo", 400);
  }
  const createSchema = await doctor.create(req.body);

  const response = new Response(
    true,
    null,
    {
      doctor: createSchema,
      jwt: createJwt({ _id: createSchema._id }, "himanshu"),
    },
    "success",
    201,
    null
  );

  res.json({ createSchema });
});
module.exports = signUp;
