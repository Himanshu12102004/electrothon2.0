const { default: mongoose } = require("mongoose");
const generateRegistrationModel = require("./generateRegistrationModel");

const getModel = async (activeForm) => {
  let model;
  const { referToCollection } = activeForm;
  if (mongoose.models[referToCollection]) {
    model = mongoose.model(referToCollection);
  } else {
    model = mongoose.model(
      referToCollection,
      await generateRegistrationModel(activeForm)
    );
  }
  return model;
};
module.exports = getModel;
