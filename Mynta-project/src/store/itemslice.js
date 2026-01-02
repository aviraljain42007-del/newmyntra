import { createSlice } from "@reduxjs/toolkit";
const itemSlice = createSlice({
    name : "items",
    initialState : [],
    reducers : {
        addInitialItems : (store , action) => {
            return action.payload;
        },
          addsingleItems : (store , action) => {
       store.push(action.payload);
       return store;
            
        }
    }
});
export const itemactions  = itemSlice.actions;
export default itemSlice