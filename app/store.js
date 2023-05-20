const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../features/cakes/cakeSlice.js");
const icecreamReducer = require("../features/icecreams/icecreamSlice.js");

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
  },
});

module.exports = store;
