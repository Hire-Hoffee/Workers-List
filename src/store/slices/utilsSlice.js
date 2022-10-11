import { createSlice } from "@reduxjs/toolkit";

export const utilsSlice = createSlice({
  name: "utils",
  initialState: {
    data: {
      isLoading: false,
    },
  },
  reducers: {
    changeLoading: (state, action) => {
      state.data.isLoading = action.payload;
    },
  },
});

export const { changeLoading } = utilsSlice.actions;

export default utilsSlice.reducer;
