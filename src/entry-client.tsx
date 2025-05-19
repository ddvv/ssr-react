import {hydrateRoot} from 'react-dom/client'
import {Provider} from "react-redux";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {routes} from "./router/routes.tsx";
import {store} from "./redux/store.ts";

const router = createBrowserRouter(routes);

hydrateRoot(
    document.getElementById('root') as HTMLElement,
    <Provider store={store}><RouterProvider router={router}/></Provider>
)
