import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemslice";
import Fetchstatus from "./fetchstatus";
import Bagitems from "./bagslice";
import authSlice from "./auth";

const myntrastore = configureStore({
    reducer:{
        items : itemSlice.reducer,
        fetchstatus: Fetchstatus.reducer,
        bagitems:Bagitems.reducer,
        auth: authSlice.reducer
    }
});
export default myntrastore;