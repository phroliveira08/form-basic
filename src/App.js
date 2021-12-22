import RegisterForm from "./components/RegisterForm/RegisterForm";
import { Container, Typography } from "@mui/material";
import "fontsource-roboto";

const App = () => {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h3" align="center">
        Formulário de Cadastro
      </Typography>
      <RegisterForm />
    </Container>
  );
};

export default App;
