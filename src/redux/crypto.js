import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.coingecko.com/api/v3/",
  }),
  endpoints: (builder) => ({
    getCryptoByName: builder.query({
      query: (data) =>
        `coins/markets?vs_currency=${data.apiCurrency}&order=market_cap_desc&per_page=10&page=${data.page}`,
    }),
    getCryptoCoinDataByName: builder.query({
      query: (crypto) => `coins/${crypto}`,
    }),
    getCryptoTimelyDataByName: builder.query({
      query: (currencyType) =>
        `coins/${currencyType}/market_chart?vs_currency=usd&days=1`,
    }),
  }),
});

export const {
  useGetCryptoByNameQuery,
  useGetCryptoCoinDataByNameQuery,
  useGetCryptoTimelyDataByNameQuery,
} = cryptoApi;
