const http = require('http')
const port = process.env.PORT || 3000
const server = http.createServer((req, res) => {
    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLocaleLowerCase()
    switch(path) {
        case '':
            res.writeHead(200, { 'content-Type' : 'text/plain'})
            res.end('Homepage')
            break
        case '/swoo':
            res.writeHead(200, { 'content-Type' : 'text/plain'})
            res.end('swoo')
            break
        default:
            res.writeHead(404, { 'content-Type' : 'text/plain'})
            res.end('Not Found')
            break
    }
})

server.listen(port, () => console.log(`server started on port ${port}` +
'press Ctrl-C to terminate...'))