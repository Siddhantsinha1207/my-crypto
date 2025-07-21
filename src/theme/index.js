import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#eebc1d",
    },
    secondary: {
      main: "#111",
    },
  },
  typography: {
    fontWeightBold: "bold",
    fontWeightLight: "lighter",
  },
});
