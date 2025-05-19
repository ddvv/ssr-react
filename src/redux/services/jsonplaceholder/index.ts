import {fetchBaseQuery} from '@reduxjs/toolkit/query/react'

import {
    buildCreateApi,
    coreModule,
    reactHooksModule,
} from '@reduxjs/toolkit/query/react'

// https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering#server-side-rendering-elsewhere
const createApi = buildCreateApi(
    coreModule(),
    reactHooksModule({unstable__sideEffectsInRender: true}),
)

// Define a service using a base URL and expected endpoints
export const jsonplaceholderApi = createApi({
    reducerPath: 'jsonplaceholderApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    endpoints: (build) => ({
        getUsers: build.query({
            query: () => `users/`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetUsersQuery} = jsonplaceholderApi