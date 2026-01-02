import { createSlice } from "@reduxjs/toolkit";

const Bagitems = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addtobag(store, action) {
      store.push(action.payload);
      return store;
    },
    deletefrombag(store, action) {
       store = store.filter(itemid => itemid !== action.payload);
      return store;
    },
  },
});
export const bagitemsactions = Bagitems.actions;
export default Bagitems;
