import { ThemeProvider } from "styled-components";
import theme from "../src/global/theme";
import Routes from './routes';

const App = () => {
  return (
     <ThemeProvider theme={theme}>
      <Routes />
     </ThemeProvider>
  );
};

export default App;
