import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    value: [],
  },
  reducers: {
    changeUsersArray: (state, action) => {
      state.value = [action.payload];
    },
  },
});

export const { changeUsersArray } = usersSlice.actions;

export default usersSlice.reducer;
