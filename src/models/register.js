export const validateCPF = (cpf) => {
  let valid = true;
  let message = "";
  if (cpf.length !== 11) {
    valid = false;
    message = "O CPF precisa ter 11 digitos";
  }
  return { valid, message };
};
