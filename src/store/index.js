import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/usersSlice";
import utilsSlice from "./slices/utilsSlice";

export default configureStore({
  reducer: {
    users: usersReducer,
    utils: utilsSlice,
  },
});
