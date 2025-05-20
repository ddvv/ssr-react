import {renderToString} from 'react-dom/server'
import {createStaticHandler, createStaticRouter, StaticRouterProvider} from "react-router-dom/server";
import {routes} from "./router/routes"

import {type Request as ExpressRequest, type Response as ExpressResponse} from "express"
import {createFetchRequest, createHeadTags, createPreloadedStateTemplate} from "./entry-server.utils.js";
import {Provider} from "react-redux";
import {store} from "./redux/store.ts";
import {jsonplaceholderApi} from "./redux/services/jsonplaceholder";
import {Helmet} from "react-helmet";

export async function render(req: ExpressRequest, res: ExpressResponse) {
    let handler = createStaticHandler(routes);
    let fetchRequest = createFetchRequest(req, res);
    let context = await handler.query(fetchRequest);
    let router = createStaticRouter(
        handler.dataRoutes,
        context
    );

    // https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering#server-side-rendering-elsewhere
    await Promise.all(store.dispatch(jsonplaceholderApi.util.getRunningQueriesThunk()))

    let html = renderToString(
        <Provider store={store}>
            <StaticRouterProvider
                router={router}
                context={context}
            />
        </Provider>
    );
    // Вызвать обязательно после renderToString
    // https://www.npmjs.com/package/react-helmet#server-usage
    const helmet = Helmet.renderStatic();

    const preloadedState = createPreloadedStateTemplate(store.getState());
    const head = createHeadTags(helmet);

    return {html, preloadedState, head};
}
