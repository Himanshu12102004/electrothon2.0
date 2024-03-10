const crypto = require("crypto");

const createSecrets = () => {
  const secret = crypto.randomBytes(32).toString("hex");
  return secret;
};
module.exports = createSecrets;
