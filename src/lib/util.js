// Define rules that return error messages for each field
const fieldRules = {
  required: (value) => (value ? true : "Field Required."),

  email: (value) =>
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value) ||
    "Invalid email.",

  password: (value) =>
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value) ||
    "Password must contain at least 8 characters, one uppercase, one number and one special case character.",
};

// Util function validates fields
export const validateFields = (fields) => {
  const errors = {};
  for (const field of fields) {
    const { name, value, rules } = field;
    for (const rule of rules) {
      const error = fieldRules[rule](value);

      if (error !== true) {
        errors[name] = error;
        break;
      }
    }
  }
  return errors;
};
