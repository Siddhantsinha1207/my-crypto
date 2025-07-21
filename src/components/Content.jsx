import { Box, Grid, Typography, useTheme } from "@mui/material";
import Input from "./Input";
import DataTable from "./DataTable";
import { coinsHeader } from "../constants";

import { useGetCryptoByNameQuery } from "../redux/crypto";
import { useState } from "react";

const Content = () => {
  const [count, setCount] = useState(0);
  const [currency, setCurrency] = useState("usd");
  const theme = useTheme();

  const { data: coinData, isLoading } = useGetCryptoByNameQuery("usd", {
    refetchOnMountOrArgChange: true,
  });

  return (
    <Box sx={{ p: theme.spacing(2, 26, 0, 26) }}>
      {isLoading && <p>Loading Data...</p>}
      <Grid container>
        <Grid size={12}>
          <Typography
            variant="h2"
            fontSize={35}
            fontWeight="bold"
            textAlign="center"
            onClick={() =>
              setCurrency((prev) => (prev === "usd" ? "inr" : "usd"))
            }
          >
            Cryptocurrency Prices by Market Cap
          </Typography>
        </Grid>
        <Grid size={12} mt={2}>
          <Input label="Search for a crypto currency" />
        </Grid>
        <Grid size={12} mt={2}>
          <DataTable header={coinsHeader} data={coinData || []} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Content;
