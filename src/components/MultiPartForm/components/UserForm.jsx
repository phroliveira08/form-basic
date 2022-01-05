import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const UserForm = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const functionState = {
    email: setEmail,
    password: setPassword
  };

  const handleTextField = (e) => {
    const { id, value } = e.target;
    const setValue = functionState[id];

    setValue(value);
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      props.nextStep({ email, password })
    }}>
      <TextField
        id="email"
        value={email}
        type='email'
        required
        onChange={handleTextField}
        variant="outlined"
        label="Email"
        fullWidth
        margin="normal"
      />
      <TextField
        id="password"
        value={password}
        type='password'
        required
        onChange={handleTextField}
        variant="outlined"
        label="Senha"
        fullWidth
        margin="normal"
      />
      <Button type='submit' variant="contained">
        Proximo Passo
      </Button>
    </form>
  )
}

export default UserForm