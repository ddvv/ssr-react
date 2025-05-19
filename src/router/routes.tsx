import {type RouteObject} from "react-router-dom";
import {Error} from "./pages/error";
import {Root} from "./pages/root";
import {About} from "./pages/about";
import {Counter} from "./pages/counter";
import {Users} from "./pages/users";

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
            {
                path: "counter/",
                element: <Counter/>,
            },
            {
                path: "users/",
                element: <Users/>,
            },
        ],
    },
];