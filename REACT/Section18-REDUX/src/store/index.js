// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
//configureStore is a good way when we have multiple reduces

// const counterReducer = (state = initialCounterState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "incrase") {
//     //always we return a brand new state object which redux replace old state, they overide oxisting state, DONT MERGE
//     //Always we need to update all peaces of state
//     //NEWER MUTATE EXISTING STATE
//     //RETURN BRAND NEW OBJECT AS BELOW
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     //always we return a brand new state object which redux replace old state, they overide oxisting state, DONT MERGE
//     //Always we need to update all peaces of state
//     //NEWER MUTATE EXISTING STATE
//     //RETURN BRAND NEW OBJECT AS BELOW
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }
//   return state;
// };

// const store = createStore(counterReducer);
// const store = createStore(counterSlice.reducer);

import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer }, //handling multiple reducer
  // reducer: counterSlice.reducer, //single reducer
});

export default store;
