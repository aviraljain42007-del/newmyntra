import { createSlice } from "@reduxjs/toolkit";
const Fetchstatus = createSlice({
  name: "fetchstatus",
  initialState: {
    fetchdone : false,
    fetching: false,
  },
  reducers: {
     markfetchdone: (store) => {
        store.fetchdone = true
      return (store);
    },
    markfetchstart: (store) => {
        store.fetching = true
      return (store);
    },
    markfetchfinish: (store) => {
        store.fetching = false
      return (store);
    },
  },
});

export const fetchstatusactions = Fetchstatus.actions;
export default Fetchstatus;
