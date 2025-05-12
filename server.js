const http = require('http');

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


const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(TEMPLATE);
    res.end();
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});