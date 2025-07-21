import { Box, Grid, Typography, useTheme } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import Input from "./Input";
import DataTable from "./DataTable";
import { coinsHeader } from "../constants";

import { useGetCryptoByNameQuery } from "../redux/crypto";
import { currencyFormatter } from "../utils/currencyFormatter";

import { setSearch } from "../redux/crypto-slice";
import { useNavigate } from "react-router-dom";

const Content = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();

  const { search } = useSelector((state) => state.crypto);

  const { data: coinData, isLoading } = useGetCryptoByNameQuery("usd", {
    refetchOnMountOrArgChange: true,
  });

  function handleChange(e) {
    const value = e.target.value;
    dispatch(setSearch(value));
  }

  function handleCellClick(coinData) {
    navigate("/coin");
    console.log(coinData);
  }

  const formattedCoinData = coinData?.map((item) => {
    const currency = currencyFormatter(item["current_price"]);
    const marketCap = currencyFormatter(item["market_cap"]);
    return {
      ...item,
      current_price: `$ ${currency}`,
      market_cap: `$ ${marketCap}`,
    };
  });

  const filteredData = formattedCoinData?.filter((data) => {
    return data.name.toLowerCase().includes(search.toLowerCase());
  });

  console.log(filteredData);

  return (
    <Box sx={{ p: theme.spacing(2, 26, 2, 26) }}>
      {isLoading && <p>Loading Data...</p>}
      <Grid container>
        <Grid size={12}>
          <Typography
            variant="h2"
            fontSize={35}
            fontWeight="bold"
            textAlign="center"
          >
            Cryptocurrency Prices by Market Cap
          </Typography>
        </Grid>
        <Grid size={12} mt={2}>
          <Input
            label="Search for a crypto currency"
            onChange={handleChange}
            value={search}
          />
        </Grid>
        <Grid size={12} mt={2}>
          <DataTable
            header={coinsHeader}
            data={filteredData || []}
            onCellClick={handleCellClick}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Content;
