import { createSlice } from "@reduxjs/toolkit";

export const utilsSlice = createSlice({
  name: "utils",
  initialState: {
    data: {
      isLoading: false,
      isError: false,
    },
  },
  reducers: {
    changeLoading: (state, action) => {
      state.data.isLoading = action.payload;
    },
    changeError: (state, action) => {
      state.data.isError = action.payload;
    },
  },
});

export const { changeLoading, changeError } = utilsSlice.actions;

export default utilsSlice.reducer;
