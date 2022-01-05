import React from 'react'

const Validations = React.createContext({
  cpf: () => { return { valid: true, message: "" } }
})

export default Validations