import MultiPartForm from "./components/MultiPartForm/MultiPartForm";
import { Container, Typography } from "@mui/material";
import "fontsource-roboto";

const App = () => {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h3" align="center">
        Formulário de Cadastro
      </Typography>
      <MultiPartForm />
    </Container>
  );
};

export default App;
