const server = require('./server.js');
// function handler(request, response){
//     const endpoint = request.url;
//     console.log(endpoint);

//     const method = request.method;
//     console.log(method);
// }

const handler = module.exports = {};
// const data = require('./data.json');

const headers = {
    'Content-Type' : 'text/html'
}

handler.home = (request, response) => {
    response.writeHead(200, headers);
    response.write("home");
    console.log("home sometinf");
    response.end();
};

handler.notFound = (request, response) => {
    response.writeHead(404, headers);
    response.write("error 404");
    console.log("404 sometinf");
    response.end();
};
