import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice/todo";
console.log('todoReducer:---- ', todoReducer);


export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
