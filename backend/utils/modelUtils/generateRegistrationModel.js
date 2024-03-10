const layout = require("../../models/layoutSchema");
const generateRegistrationModel = async (activeForm) => {
  const schemaObject = {
    timestamp: { type: Date, default: new Date().toISOString() },
  };
  activeForm.form.forEach((field) => {
    let type;
    if (field.type == "Number") {
      type = Number;
    } else if (field.type == "String") {
      type = String;
    } else if (field.type == "Boolean") {
      type = Boolean;
    }
    schemaObject[field.label] = {
      type: type,
      required: field.required,
      unique: field.unique,
    };
    if (field.dropDown) {
      schemaObject[field.label]["enum"] = field.enum;
    }
  });
  return schemaObject;
};
module.exports = generateRegistrationModel;
