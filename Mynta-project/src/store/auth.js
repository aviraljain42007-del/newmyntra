import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "authentication",
  initialState: {
    type: null,
    name: null,
    details: null,
    isloggedin: false,
  },
  reducers: {
    addtype: (store, action) => {
      store.type = action.payload;
      return store;
    },
    addname: (store, action) => {
      store.name = action.payload;
      return store;
    },
    logout: (store, action) => {
      store.type = null;
      store.isloggedin = false;
      return store;
    },
    adddetail: (store, action) => {
      store.details = action.payload;
      return store;
    },
    login: (store, action) => {
      store.isloggedin = true;
      return store;
    },
  },
});
export const authactions = authSlice.actions;
export default authSlice;
