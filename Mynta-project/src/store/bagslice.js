import { createSlice } from "@reduxjs/toolkit";

const Bagitems = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addtobag(store, action) {
      return action.payload;
    },
  },
});
export const bagitemsactions = Bagitems.actions;
export default Bagitems;
