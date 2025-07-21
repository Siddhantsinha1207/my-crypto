import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  search: "",
};

const cryptoSlice = createSlice({
  name: "crypto",
  initialState: initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = cryptoSlice.actions;
export default cryptoSlice.reducer;
