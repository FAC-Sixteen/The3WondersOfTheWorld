// const server = require('./server.js');
const fs = require('fs');
const path = require('path');

const handler = module.exports = {};
// const data = require('./data.json');

const headers = {
    'Content-Type' : 'text/html'
}

handler.home = (request, response) => {
    const filePath = path.join(__dirname, '..', 'public/index.html');
    console.log(filePath);
    fs.readFile(filePath, (error, file) => {
      console.log(file);
      if(error) {
        response.writeHead(500, headers);
        console.log(error);
        response.end("<h1>This is an error page. Ooops.</h1>");
      } else {
        response.writeHead(200, headers);
        console.log("this is the file")
      response.end(file);
    }
  });
};

handler.notFound = (request, response) => {
    response.writeHead(404, headers);
    response.write("error 404");
    console.log("404 sometinf");
    response.end();
};
