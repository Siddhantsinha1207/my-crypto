import { Box, Typography } from "@mui/material";
import bannerImage from "../assets/banner2.jpg";
const Hero = () => {
  return (
    <Box
      sx={{
        // height: "15rem",
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        padding: "5rem 12.2rem",
        color: "#fff",
      }}
    >
      <Typography variant="h1" sx={{ color: "#fff", textAlign: "center" }}>
        My Crypto
      </Typography>
      <Typography variant="h6" sx={{ color: "#fff", textAlign: "center" }}>
        Get all the Info regarding your favorite Crypto Currency
      </Typography>
    </Box>
  );
};

export default Hero;
