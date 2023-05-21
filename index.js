const store = require("./app/store");
const { fetchUsers } = require("./features/users/userSlice");
const cakeActions = require("./features/cakes/cakeSlice.js").cakeActions;
const icecreamActions = require("./features/icecreams/icecreamSlice.js").icecreamActions;

console.log("Initial state", store.getState());

// const unsubscribe = store.subscribe(() => {})

store.dispatch(fetchUsers());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(3));

// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.restocked(3));

// unsubscribe();
