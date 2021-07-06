const http = require("http")

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.end("Welcome")
    }

    if (req.url === '/about'){
        res.end("About page")
    }

    res.end(`<h1>Not Found</h1>`)
})

server.listen(5000)

