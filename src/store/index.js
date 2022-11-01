import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slices/usersSlice";
import utilsSlice from "./slices/utilsSlice";

export default configureStore({
  reducer: {
    users: usersSlice,
    utils: utilsSlice,
  },
});
