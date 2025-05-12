import express from 'express'
import fs from "node:fs/promises";
import sirv from 'sirv'

const app = express()

const PORT = 3000;
const BASE = '/'
const TEMPLATE =  await fs.readFile('./dist/client/index.html', 'utf-8');

app.use(BASE, sirv('./dist/client', { extensions: [] }))

app.use('*all', async (req, res) => {
    const url = req.originalUrl;
    let render;
    render = (await import('./dist/server/entry-server.js')).render;
    const rendered = await render(url);
    const html = TEMPLATE
        .replace(`<!--app-head-->`, rendered.head ?? '')
        .replace(`<!--app-html-->`, rendered.html ?? '')
    res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
});

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
})