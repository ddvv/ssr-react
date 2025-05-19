import {combineReducers} from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice.ts";

export const reducer = combineReducers({
    counter: counterReducer,
})