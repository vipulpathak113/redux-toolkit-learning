const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../features/cakes/cakeSlice.js");
const reduxLogger = require("redux-logger");
const icecreamReducer = require("../features/icecreams/icecreamSlice.js");
const userReducer = require("../features/users/userSlice.js");

const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
