const subjectReducer = (state = "", action) => {
  switch (action.type) {
    case "SETSUBJECT":
      return action.data;
    default:
      return state;
  }
};

/** Set the subject. */
export const setSubject = (subject) => {
  return { type: "SETSUBJECT", data: subject };
};

export default subjectReducer;
