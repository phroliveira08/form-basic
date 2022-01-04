import React from 'react'
import { TextField, Button } from '@mui/material'

const DeliveryForm = (props) => {
  return (
    <form>
      <TextField
        id="cep"
        value='{cep}'
        type='number'
        //onChange={handleTextField}
        variant="outlined"
        label="CEP"
        margin="normal"
      />
      <TextField
        id="address"
        value='{address}'
        type='text'
        //onChange={handleTextField}
        variant="outlined"
        label="Endereço"
        fullWidth
        margin="normal"
      />
      <TextField
        id="numberHouse"
        value='{numberHouse}'
        type='number'
        //onChange={handleTextField}
        variant="outlined"
        label="Número"
        margin="normal"
      />
      <TextField
        id="state"
        value='{state}'
        type='text'
        //onChange={handleTextField}
        variant="outlined"
        label="Estado"
        margin="normal"
      />
      <TextField
        id="city"
        value='{city}'
        type='text'
        //onChange={handleTextField}
        variant="outlined"
        label="Cidade"
        margin="normal"
      />
      <Button type='button' variant="contained" onClick={props.nextStep} fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  )
}

export default DeliveryForm