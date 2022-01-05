import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@mui/material";
import useErros from "../../../hooks/useErros";

const PersonalForm = (props) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cpf, setCPF] = useState("");

  const [sale, setSale] = useState(true);
  const [news, setNews] = useState(true);

  const [errors, validateField] = useErros()

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

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      props.nextStep({ name, lastName, cpf, sale, news })
    }}>
      <TextField
        id="name"
        value={name}
        required
        onChange={handleTextField}
        variant="outlined"
        label="Nome"
        fullWidth
        margin="normal"
      />
      <TextField
        id="lastname"
        value={lastName}
        required
        onChange={handleTextField}
        variant="outlined"
        label="Sobrenome"
        fullWidth
        margin="normal"
      />
      <TextField
        id="cpf"
        value={cpf}
        required
        onBlur={validateField}
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

      <Button type='submit' variant="contained">
        Proximo Passo
      </Button>
    </form>
  );
};

export default PersonalForm;
