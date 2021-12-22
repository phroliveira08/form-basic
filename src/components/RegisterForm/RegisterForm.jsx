import React from "react";
import { Button, TextField, Switch, FormControlLabel } from "@mui/material";

const RegisterForm = () => {
  return (
    <form>
      <TextField id="name" variant='outlined' label='Nome' fullWidth margin="normal" />
      <TextField id="lastname" variant='outlined' label='Sobrenome' fullWidth margin="normal" />
      <TextField id="cpf" variant='outlined' label='CPF' fullWidth margin="normal" />

      <FormControlLabel control={<Switch defaultChecked />} label='Promoções' />
      <FormControlLabel control={<Switch defaultChecked />} label='Novidades' />

      <Button type="submit" variant='contained'>
        Cadastrar
      </Button>
    </form>
  )
}

export default RegisterForm