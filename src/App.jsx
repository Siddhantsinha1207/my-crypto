import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import Layout from "./components/Layout";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CryptoData from "./components/CryptoData";
import Home from "./components/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "coin/:coinId",
        element: <CryptoData />,
      },
    ],
  },
]);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        {/* <Layout /> */}
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
