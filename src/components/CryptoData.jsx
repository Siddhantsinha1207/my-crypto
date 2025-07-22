import { useTheme } from "@emotion/react";
import { Box, Grid, Typography } from "@mui/material";

const CryptoData = () => {
  const theme = useTheme();

  const coinData = localStorage.getItem("coinData");
  const data = JSON.parse(coinData);
  return (
    <Box sx={{ p: theme.spacing(2) }}>
      <Grid container>
        <Grid
          size={4}
          justifyContent="center"
          // textAlign="center"
          sx={{ borderRight: "4px solid white" }}
        >
          <Grid size={12}>
            <img
              src={data.image}
              style={{ height: 150, width: 150, margin: "0 auto" }}
            />
          </Grid>
          <Grid size={12} mt={3} textAlign="center">
            <Typography variant="h2">{data.name}</Typography>
          </Grid>
          <Grid size={12} mt={4}>
            <Typography variant="h5">
              <b>Rank: &nbsp;</b> {data["market_cap_rank"]}
            </Typography>
          </Grid>
          <Grid size={12} mt={4}>
            <Typography variant="h5">
              <b>Current Price: &nbsp;</b> {data["current_price"]}
            </Typography>
          </Grid>
          <Grid size={12} mt={4}>
            <Typography variant="h5">
              <b>Market Cap: &nbsp;</b> {data["market_cap"]}
            </Typography>
          </Grid>
        </Grid>
        <Grid size={8}>2</Grid>
      </Grid>
    </Box>
  );
};

export default CryptoData;
