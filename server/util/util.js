export const validatorEmail = (value) => {
  let validEmailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return validEmailPattern.test(value);
};
