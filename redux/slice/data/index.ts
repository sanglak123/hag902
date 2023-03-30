import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/redux/store";
import { DataPublic } from "@/support/type/DataPublic.Type";

const initialState: DataPublic = {
  Prices: [],
  Cards: [],
  Banks: [],
};
const DataPublic = createSlice({
  name: "User",
  initialState,
  reducers: {
    LoadDataPublic: (state, action) => {
      state.Prices = action.payload.Prices;
      state.Banks = action.payload.Banks;
    },
  },
});

//Export Action
export const {} = DataPublic.actions;
//Export Selector
export const DataPublicSelector = (state: RootState) => state.DataPublic;

export default DataPublic;
