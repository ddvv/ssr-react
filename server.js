import express from 'express'

const app = express()

const PORT = 3000;
const TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>SSR</h1>
</body>
</html>`;


app.use('*all', async (req, res) => {
    res.status(200).set({ 'Content-Type': 'text/html' }).send(TEMPLATE)
});

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
})