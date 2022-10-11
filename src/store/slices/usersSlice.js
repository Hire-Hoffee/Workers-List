import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
  },
  reducers: {
    changeUsersArray: (state, action) => {
      state.data = [...action.payload];
    },
  },
});

export const { changeUsersArray } = usersSlice.actions;

export default usersSlice.reducer;
