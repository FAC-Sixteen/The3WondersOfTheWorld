const http = require('http');
const router = require('./router.js');
const port = 4000;
const app = (request, response) => {
    router(request, response)
}
const server = http.createServer(app);
server.listen(port, () => {
    console.log("running on port 4000");
})

module.exports = {
    server,
    app,
    http
}

