const validateEmail = (email: string): boolean => {
  const validEmail = /^([a-zA-Z0-9._]+)@successive.tech/;
  return validEmail.test(email);
};
export default validateEmail;
