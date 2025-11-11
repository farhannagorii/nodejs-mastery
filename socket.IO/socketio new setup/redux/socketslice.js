// src/redux/slices/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
   socket : null,
   onlineusers:null
  },
  reducers: {
      setsocket:(state,action)=>{
       state.socket=action.payload
      },
      setonlineuser:(state,action)=>{
       state.socket=action.payload
      },
      
  },
});

export const {setsocket, setonlineuser } = userSlice.actions;
export default userSlice.reducer;