import React, { useState } from "react";
import { TextField, Button, Step } from "@mui/material";

const UserForm = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form>
      <TextField
        id="email"
        value={email}
        type='email'
        //onChange={handleTextField}
        variant="outlined"
        label="Email"
        fullWidth
        margin="normal"
      />
      <TextField
        id="password"
        value={password}
        type='password'
        //onChange={handleTextField}
        variant="outlined"
        label="Senha"
        fullWidth
        margin="normal"
      />
      <Button type='button' variant="contained" onClick={props.nextStep}>
        Proximo Passo
      </Button>
    </form>
  )
}

export default UserForm