import MultiPartForm from "./components/MultiPartForm/MultiPartForm";
import { Container, Typography } from "@mui/material";
import "fontsource-roboto";
import Validations from "./contexts/Validations";
import { validateCPF } from "./models/register";

const App = () => {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h3" align="center">
        Formulário de Cadastro
      </Typography>
      <Validations.Provider value={{ cpf: validateCPF }}>
        <MultiPartForm />
      </Validations.Provider>
    </Container>
  );
};

export default App;
