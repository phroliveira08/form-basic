import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'

const DeliveryForm = (props) => {
  const [cep, setCEP] = useState("");
  const [address, setAddress] = useState("");
  const [numberHouse, setNumberHouse] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const functionState = {
    cep: setCEP,
    address: setAddress,
    numberHouse: setNumberHouse,
    state: setState,
    city: setCity
  };

  const handleTextField = (e) => {
    const { id, value } = e.target;
    const setValue = functionState[id];

    setValue(value);
  };
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      props.nextStep({ cep, address, numberHouse, state, city })
    }}>
      <TextField
        id="cep"
        value={cep}
        type='number'
        required
        onChange={handleTextField}
        variant="outlined"
        label="CEP"
        margin="normal"
      />
      <TextField
        id="address"
        value={address}
        type='text'
        required
        onChange={handleTextField}
        variant="outlined"
        label="Endereço"
        fullWidth
        margin="normal"
      />
      <TextField
        id="numberHouse"
        value={numberHouse}
        type='number'
        required
        onChange={handleTextField}
        variant="outlined"
        label="Número"
        margin="normal"
      />
      <TextField
        id="state"
        value={state}
        type='text'
        required
        onChange={handleTextField}
        variant="outlined"
        label="Estado"
        margin="normal"
      />
      <TextField
        id="city"
        value={city}
        type='text'
        required
        onChange={handleTextField}
        variant="outlined"
        label="Cidade"
        margin="normal"
      />
      <Button type='submit' variant="contained" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  )
}

export default DeliveryForm