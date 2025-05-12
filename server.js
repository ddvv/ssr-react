import express from 'express'
import fs from "node:fs/promises";
import sirv from 'sirv'

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';
const PORT = 3000;
const BASE = '/'

const app = express()

/** @type {import('vite').ViteDevServer | undefined} */
let vite;

if (isDevelopment) {
    const {createServer} = await import('vite')
    vite = await createServer({
        server: {middlewareMode: true},
        appType: 'custom',
        BASE,
    })
    app.use(vite.middlewares)
}

if (isProduction) {
    app.use(BASE, sirv('./dist/client', {extensions: []}))
}

app.use('*all', async (req, res) => {
    const url = req.originalUrl;
    /** @type {string} */
    let template;
    /** @type {import('./src/entry-server.ts').render} */
    let render;

    if (isDevelopment) {
        template = await fs.readFile('./index.html', 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
    }

    if (isProduction) {
        template = await fs.readFile('./dist/client/index.html', 'utf-8');
        render = (await import('./dist/server/entry-server.js')).render;
    }

    const rendered = await render(url);
    const html = template
        .replace(`<!--app-head-->`, rendered.head ?? '')
        .replace(`<!--app-html-->`, rendered.html ?? '');

    res.status(200).set({'Content-Type': 'text/html'}).send(html)
});

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
})