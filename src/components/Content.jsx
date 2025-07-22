import { Box, Grid, Typography, useTheme } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import Input from "./Input";
import DataTable from "./DataTable";
import { coinsHeader } from "../constants";
import { useGetCryptoByNameQuery } from "../redux/crypto";
import { currencyFormatter } from "../utils/currencyFormatter";
import { setCryptoCoinData, setSearch } from "../redux/crypto-slice";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import PagesCol from "./Pagination";
import { useReducer } from "react";

const initialState = {
  page: 1,
  cryptoCoinData: {},
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "CHANGE_PAGE":
      return { ...state, page: action.payload };
    case "UPDATE_COIN_DATA":
      return { ...state, cryptoCoinData: action.payload };

    default:
      return state;
  }
}

const Content = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();

  const [{ page, cryptoCoinData }, dispatchAc] = useReducer(
    reducer,
    initialState
  );

  const { search } = useSelector((state) => state.crypto);

  const apiData = {
    apiCurrency: "usd",
    page: page,
  };

  const { data: coinData, isLoading } = useGetCryptoByNameQuery(apiData, {
    refetchOnMountOrArgChange: true,
  });

  function handleChange(e) {
    const value = e.target.value;
    dispatch(setSearch(value));
  }

  function handleCellClick(coinData) {
    dispatch(setCryptoCoinData(coinData));
    localStorage.setItem("coinData", JSON.stringify(coinData));
    navigate(`/coin/${coinData.id}`);
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

  function handleChangePage(e, val) {
    dispatchAc({ type: "CHANGE_PAGE", payload: val });
  }

  return (
    <Box sx={{ p: theme.spacing(2, 26, 4, 26) }}>
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
        <Grid size={12} mt={4}>
          <PagesCol page={page} onChange={handleChangePage} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Content;
