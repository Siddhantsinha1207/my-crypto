import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Logo from "../assets/cover.png";
import { styled, useTheme } from "@mui/material";
import CustomButton from "./CustomButton.jsx";
import { useNavigate } from "react-router-dom";

const LogoImg = styled("img")(({}) => ({
  height: 40,
  width: 80,
}));

export default function Header() {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          border: "1px solid black",
          p: theme.spacing(0, 20),
          backgroundColor: "#eebc1d",
        }}
      >
        <Toolbar>
          <IconButton
            disableRipple
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            onClick={() => navigate("/")}
          >
            <LogoImg src={Logo} alt="Logo" />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "end",
            }}
          >
            <CustomButton
              color="inherit"
              label="Login"
              // sx={{ flexGrow: 1, justifyContent: "flex-end" }}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
