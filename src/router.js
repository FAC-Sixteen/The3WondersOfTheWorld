const handler = require('./handler.js');

const routes = {
    "/" : handler.home,
    "404" : handler.notFound
};

const routeFunc = (request, response) => {
    if (routes[request.url]){
        routes[request.url](request, response);
    } else {
        routes[404](request, response);
    }
};

module.exports = routeFunc;
