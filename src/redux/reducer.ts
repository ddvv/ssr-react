import {combineReducers} from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice.ts";
import {jsonplaceholderApi} from "./services/jsonplaceholder";

export const reducer = combineReducers({
    [jsonplaceholderApi.reducerPath]: jsonplaceholderApi.reducer,
    counter: counterReducer,
})