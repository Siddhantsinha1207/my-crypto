import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import Layout from "./components/Layout";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <Layout />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
