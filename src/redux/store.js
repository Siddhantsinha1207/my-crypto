import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "./crypto";
import { setupListeners } from "@reduxjs/toolkit/query";
import cryptoReducer from "./crypto-slice";

export const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware),
});

setupListeners(store.dispatch);
