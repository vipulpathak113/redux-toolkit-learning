const { cakeActions } = require("../cakes/cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

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
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIcecreams--;
    });
  },
});

module.exports = iceCreamSlice.reducer;
module.exports.icecreamActions = iceCreamSlice.actions;
