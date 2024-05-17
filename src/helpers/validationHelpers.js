const checkValidity = (type, value) => {
  if (type === "email") {
    return (
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
    );
  } else if (type === "password") {
    return /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(value);
  } else return true;
};

export const validateFields = (fields) => {
  const errors = {};
  for (const field of fields) {
    const { name, value } = field;
    const error = !checkValidity(name, value);
    errors[name] = error;
    return errors;
  }
};
