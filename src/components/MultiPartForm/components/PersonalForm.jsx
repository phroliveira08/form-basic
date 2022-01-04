import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@mui/material";

const PersonalForm = (props) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cpf, setCPF] = useState("");

  const [sale, setSale] = useState(true);
  const [news, setNews] = useState(true);

  const [errors, setErrors] = useState({
    cpf: {
      valid: true,
      message: "",
    }
  });

  const functionState = {
    name: setName,
    lastname: setLastName,
    cpf: setCPF,
    sale: setSale,
    news: setNews,
  };

  const handleTextField = (e) => {
    const { id, value } = e.target;
    const setValue = functionState[id];

    setValue(value);
  };

  const handleSwitch = (e) => {
    const { id, checked } = e.target;
    const setValue = functionState[id];

    setValue(checked);
  };

  const validateCPF = () => {
    let valid = true;
    let message = "";
    if (cpf.length !== 11) {
      valid = false;
      message = "O CPF precisa ter 11 digitos";
    }
    setErrors({
      ...errors,
      cpf: {
        valid,
        message,
      }
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("data", {
      name,
      lastName,
      cpf,
      sale,
      news,
    });
  };

  return (
    <form onSubmit={submitForm}>
      <TextField
        id="name"
        value={name}
        onChange={handleTextField}
        variant="outlined"
        label="Nome"
        fullWidth
        margin="normal"
      />
      <TextField
        id="lastname"
        value={lastName}
        onChange={handleTextField}
        variant="outlined"
        label="Sobrenome"
        fullWidth
        margin="normal"
      />
      <TextField
        id="cpf"
        value={cpf}
        onBlur={validateCPF}
        onChange={handleTextField}
        error={!errors.cpf.valid}
        helperText={errors.cpf.message}
        variant="outlined"
        label="CPF"
        fullWidth
        margin="normal"
      />
      <FormControlLabel
        control={
          <Switch
            id="sale"
            onChange={handleSwitch}
            checked={sale}
            value={sale}
          />
        }
        label="Promoções"
      />
      <FormControlLabel
        control={
          <Switch
            id="news"
            onChange={handleSwitch}
            checked={news}
            value={news}
          />
        }
        label="Novidades"
      />

      <Button type='button' variant="contained" onClick={props.nextStep}>
        Proximo Passo
      </Button>
    </form>
  );
};

export default PersonalForm;
