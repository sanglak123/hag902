import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "User",
  initialState: {
    Auth: [],
    Store: [],
  },
  reducers: {
    //Auth
    LoginSuccess: (state, action) => {
      state.Auth = action.payload;
    },
    LogoutSuccess: (state, action) => {
      state.Auth = [];
    },
  },
});
export const { LoginSuccess, LogoutSuccess } = UserSlice.actions;

export default UserSlice;
