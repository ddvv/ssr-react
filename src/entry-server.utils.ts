//@ts-nocheck
// Код взят из [документации](https://reactrouter.com/6.30.0/guides/ssr#with-a-data-router)
import type {HelmetData} from "react-helmet";

export function createFetchRequest(req, res) {
    let origin = `${req.protocol}://${req.get("host")}`;
    // Note: This had to take originalUrl into account for presumably vite's proxying
    let url = new URL(req.originalUrl || req.url, origin);

    let controller = new AbortController();
    res.on("close", () => controller.abort());

    let headers = new Headers();

    for (let [key, values] of Object.entries(req.headers)) {
        if (values) {
            if (Array.isArray(values)) {
                for (let value of values) {
                    headers.append(key, value);
                }
            } else {
                headers.set(key, values);
            }
        }
    }

    let init = {
        method: req.method,
        headers,
        signal: controller.signal,
    };

    if (req.method !== "GET" && req.method !== "HEAD") {
        init.body = req.body;
    }

    return new Request(url.href, init);
};

export function createPreloadedStateTemplate(preloadedState) {
    return `<script>window.__PRELOADED_STATE__ =${JSON.stringify(preloadedState).replace(
        /</g,
        '\\u003c'
    )}</script>`;
}

export function createHeadTags(helmet: HelmetData) {
    return `
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
    `;
}