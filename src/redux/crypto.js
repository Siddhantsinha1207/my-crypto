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
  }),
});

export const { useGetCryptoByNameQuery } = cryptoApi;
