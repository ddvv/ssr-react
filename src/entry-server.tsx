import {renderToString} from 'react-dom/server'
import {createStaticHandler, createStaticRouter, StaticRouterProvider} from "react-router-dom/server";
import {routes} from "./router/routes"

import {type Request as ExpressRequest, type Response as ExpressResponse} from "express"
import {createFetchRequest} from "./entry-server.utils.js";

export async function render(req: ExpressRequest, res: ExpressResponse) {

    let handler = createStaticHandler(routes);
    let fetchRequest = createFetchRequest(req, res);
    let context = await handler.query(fetchRequest);
    let router = createStaticRouter(
        handler.dataRoutes,
        context
    );

    let html = renderToString(
        <StaticRouterProvider
            router={router}
            context={context}
        />
    );

    return {html}
}
