import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";
import { DataUser, User } from "@/support/type/User.Type";

const initialState: DataUser = {
  User: {} as User,
  accessToken: "",
  Store: [],
};
const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    //Auth
    LoginSuccess: (state, action: PayloadAction<any>) => {
      state.User = action.payload.User;
      state.accessToken = action.payload.accessToken;
    },
    LogoutSuccess: (state) => {
      state.User = {} as User;
      state.accessToken = "";
      state.Store = [];
    },
    //Store
    ChooseCardSuccess: (state, actions) => {
      const index = state.Store.findIndex(
        (item) => item.id === actions.payload.id
      );
      if (index >= 0) {
        state.Store[index].count += 1;
      } else {
        state.Store = [...state.Store, actions.payload];
      }
    },
  },
});

//Export Action
export const { LoginSuccess, LogoutSuccess, ChooseCardSuccess } =
  UserSlice.actions;
//Export Selector
export const UserSelector = {
  User: (state: RootState) => state.UserSlice.User,
  accessToken: (state: RootState) => state.UserSlice.accessToken,
  Store: (state: RootState) => state.UserSlice.Store,
};

export default UserSlice;
