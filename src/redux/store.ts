import {configureStore} from '@reduxjs/toolkit'
import {reducer} from "./reducer.ts";

export const store = configureStore({
    reducer,
    preloadedState: window.__PRELOADED_STATE__,
})

delete window.__PRELOADED_STATE__

export type RootState = ReturnType<typeof reducer>
export type AppDispatch = typeof store.dispatch