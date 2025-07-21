import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CryptoData = () => {
  const theme = useTheme();
  const { cryptoCoinData } = useSelector((state) => state.crypto);
  return (
    <Box sx={{ p: theme.spacing(2, 26, 2, 26) }}>{cryptoCoinData.name}</Box>
  );
};

export default CryptoData;
