// const server = require('./server.js');
const fs = require('fs');
const path = require('path');

const handler = (module.exports = {});
// const data = require('./data.json');

handler.home = (request, response) => {
  const url1 = request.url;
  const extension = url1.split('.')[1];

  const extensionType = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javacsript',
    jpg: 'image/jpg',
    png: 'image/png'
  };

  const filePath = path.join(__dirname, '..', 'public/index.html');
  console.log(filePath);
  fs.readFile(filePath, (error, file) => {
    console.log(file);
    if (error) {
      response.writeHead(500, { 'Content-Type': 'text/html' });
      response.end('<h1>This is an error page. Ooops.</h1>');
    } else {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(file);
    }
  });

  const filePath2 = path.join(__dirname, '..', 'public/style.css');
  console.log(filePath2);
  fs.readFile(filePath2, (error, file) => {
    console.log(file);
    if (error) {
      response.writeHead(500, {
        'Content-Type': 'text/css'
      });
      response.end('<h1>This is an error page. Ooops.</h1>');
    } else {
      response.writeHead(200, { 'Content-Type': 'text/css' });
      response.end(file);
    }
  });
};

handler.notFound = (request, response) => {
  response.writeHead(404, { 'Content-Type': extensionType[extension] });
  response.write('error 404');
  response.end();
};
