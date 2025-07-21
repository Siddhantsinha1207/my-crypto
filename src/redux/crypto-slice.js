import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  search: "",
  pageNum: 0,
  cryptoCoinData: {},
};

const cryptoSlice = createSlice({
  name: "crypto",
  initialState: initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
    setCryptoCoinData(state, action) {
      state.cryptoCoinData = action.payload;
    },
  },
});

export const { setSearch, setCryptoCoinData } = cryptoSlice.actions;
export default cryptoSlice.reducer;
