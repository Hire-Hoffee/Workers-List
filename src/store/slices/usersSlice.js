import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    searchedArray: [],
    data: [],
  },
  reducers: {
    changeUsersArray: (state, { payload }) => {
      state.data = [...payload];
      state.searchedArray = [...payload];
    },
    sortUsersBirth: (state) => {
      state.data.forEach((data) => {
        const day = data.birthday.split("-");
        const currentYear = new Date().getFullYear();
        const birthdayDate = new Date(currentYear, day[1] - 1, day[2]);
        const now = new Date().valueOf();

        if (birthdayDate.valueOf() < now) {
          birthdayDate.setFullYear(currentYear + 1);
        }

        data.fromNow = birthdayDate.valueOf() - now;
      });

      state.data.sort((a, b) => {
        a = a.fromNow;
        b = b.fromNow;
        return a - b;
      });
    },
    sortUsersAlphabet: (state) => {
      state.data.sort((a, b) => {
        a = a.firstName.toLowerCase();
        b = b.firstName.toLowerCase();
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      });
    },
    usersSearching: (state, { payload }) => {
      state.data = state.searchedArray.filter((item) => {
        return (
          (item.firstName + " " + item.lastName).match(
            new RegExp(payload, "gi")
          ) != null ||
          item.userTag.match(new RegExp(payload, "gi")) != null
        );
      });
    },
  },
});

export const {
  changeUsersArray,
  sortUsersBirth,
  sortUsersAlphabet,
  usersSearching,
} = usersSlice.actions;

export default usersSlice.reducer;
