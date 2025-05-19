import {configureStore} from '@reduxjs/toolkit'
import {reducer} from "./reducer.ts";
import {jsonplaceholderApi} from "./services/jsonplaceholder";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer,
    preloadedState: typeof window === 'undefined' ? undefined : window.__PRELOADED_STATE__,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(jsonplaceholderApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof reducer>
export type AppDispatch = typeof store.dispatch