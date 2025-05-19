import {renderToString} from 'react-dom/server'
import {createStaticHandler, createStaticRouter, StaticRouterProvider} from "react-router-dom/server";
import {routes} from "./router/routes"

import {type Request as ExpressRequest, type Response as ExpressResponse} from "express"
import {createFetchRequest, createPreloadedStateTemplate} from "./entry-server.utils.js";
import {reducer} from "./redux/reducer.ts";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";

export async function render(req: ExpressRequest, res: ExpressResponse) {
    const store = configureStore({reducer})
    let handler = createStaticHandler(routes);
    let fetchRequest = createFetchRequest(req, res);
    let context = await handler.query(fetchRequest);
    let router = createStaticRouter(
        handler.dataRoutes,
        context
    );

    let html = renderToString(
        <Provider store={store}>
            <StaticRouterProvider
                router={router}
                context={context}
            />
        </Provider>
    );

    const preloadedState = createPreloadedStateTemplate(store.getState());

    return {html, preloadedState}
}
