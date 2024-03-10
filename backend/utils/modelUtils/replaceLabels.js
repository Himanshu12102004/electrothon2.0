const replaceLabels = (formFields, students) => {
  const studentsWithFrontendField = students.map((student) => {
    const newStudent = {};
    const dateOfRegistration = new Date(student.timestamp);

    newStudent[
      "Date of registration"
    ] = `${dateOfRegistration.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    })}, ${dateOfRegistration.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    })}`;
    formFields.forEach((field) => {
      const label = field.label;
      const frontendLabel = field.frontendLabel || label;

      if (field.type == "Boolean") {
        newStudent[frontendLabel] = student[label] == true ? "Yes" : "No";
      } else if (field.type == "Number") {
        newStudent[frontendLabel] = student[label]
          ? "" + student[label]
          : "Data Unavailable";
      } else {
        newStudent[frontendLabel] = student[label]
          ? student[label]
          : "Data Unavailable";
      }
    });

    return newStudent;
  });
  return studentsWithFrontendField;
};
module.exports = replaceLabels;
