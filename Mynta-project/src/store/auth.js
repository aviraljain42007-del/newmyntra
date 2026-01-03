import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
    name : "authentication",
    initialState : {
        type : null,
        name : null,
    },
    reducers : {
        addword : (store , action) => {
            store.type = action.payload;
            return store;
        },
          addname : (store , action) => {
            store.name = action.payload;
            return store;
        },
    }
});
export const authactions  = authSlice.actions;
export default authSlice