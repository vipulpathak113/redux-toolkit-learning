import { ordered as cakeOrdered } from "../cakes/cakeSlice";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  numOfIcecreams: 10,
};

const iceCreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecreams--;
    },
    restocked: (state, action) => {
      state.numOfIcecreams += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIcecreams--;
    });
  },
});

export default iceCreamSlice.reducer;
export const {ordered, restocked} = iceCreamSlice.actions;
