import {type RouteObject} from "react-router-dom";
import {Error} from "./pages/error";
import {Root} from "./pages/root";
import {About} from "./pages/about";

type Routes = RouteObject[];

export const routes: Routes = [
    {
        path: "/",
        element: <Root/>,
        errorElement: <Error/>,
        children: [
            {
                path: "about/",
                element: <About/>,
            },
        ],
    },
];