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
    changeUtilsState: (state, action) => {
      state.data[action.payload.stateName] = action.payload.stateValue;
    },
  },
});

export const { changeUtilsState } = utilsSlice.actions;

export default utilsSlice.reducer;
