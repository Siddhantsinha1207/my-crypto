import { useTheme } from "@emotion/react";
import { Box, Grid, Typography } from "@mui/material";
import {
  useGetCryptoCoinDataByNameQuery,
  useGetCryptoTimelyDataByNameQuery,
} from "../redux/crypto";
import CryptoChart from "./CryptoChart";

const CryptoData = () => {
  const theme = useTheme();

  const coinData = localStorage.getItem("coinData");
  const crypto = JSON.parse(coinData);
  const { data } = useGetCryptoCoinDataByNameQuery();

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
              src={crypto.image}
              style={{ height: 150, width: 150, margin: "0 auto" }}
            />
          </Grid>
          <Grid size={12} mt={3} textAlign="center">
            <Typography variant="h2">{crypto.name}</Typography>
          </Grid>
          <Grid size={12} mt={3}>
            <Typography variant="p">
              {data?.description["en"].split(".")[0]}
            </Typography>
          </Grid>
          <Grid size={12} mt={4}>
            <Typography variant="h5">
              <b>Rank: &nbsp;</b> {crypto["market_cap_rank"]}
            </Typography>
          </Grid>
          <Grid size={12} mt={4}>
            <Typography variant="h5">
              <b>Current Price: &nbsp;</b> {crypto["current_price"]}
            </Typography>
          </Grid>
          <Grid size={12} mt={4}>
            <Typography variant="h5">
              <b>Market Cap: &nbsp;</b> {crypto["market_cap"]}
            </Typography>
          </Grid>
        </Grid>
        <Grid size={8}>
          <CryptoChart />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CryptoData;
