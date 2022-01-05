import { useContext, useState } from "react";
import Validations from "../contexts/Validations";

const useErros = () => {
  const [errors, setErrors] = useState({
    cpf: { valid: true, message: "" },
  });

  const validations = useContext(Validations);

  const validateField = (event) => {
    const { id, value } = event.target;
    const isValid = validations[id](value);
    setErrors({
      ...errors,
      [id]: isValid,
    });
  };

  return [errors, validateField];
};

export default useErros;
