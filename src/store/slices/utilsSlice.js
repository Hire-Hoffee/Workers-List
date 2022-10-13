import { createSlice } from "@reduxjs/toolkit";

export const utilsSlice = createSlice({
  name: "utils",
  initialState: {
    data: {
      isLoading: false,
      isError: false,
      isOpenFilter: false,
      isFilterBirth: false,
      isOnline: "",
    },
  },
  reducers: {
    changeLoading: (state, action) => {
      state.data.isLoading = action.payload;
    },
    changeError: (state, action) => {
      state.data.isError = action.payload;
    },
    changeShowFilter: (state, action) => {
      state.data.isOpenFilter = action.payload;
    },
    changeShowYear: (state, action) => {
      state.data.isFilterBirth = action.payload;
    },
    changeIsOnline: (state, action) => {
      state.data.isOnline = action.payload;
    },
  },
});

export const {
  changeLoading,
  changeError,
  changeShowFilter,
  changeShowYear,
  changeIsOnline,
} = utilsSlice.actions;

export default utilsSlice.reducer;
