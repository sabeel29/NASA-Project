//
// my api key:
//    4Set1NN4rVba45Nxg3zq6VbeeETs19Z2CaCT9r9p
//
// second api key :
//     hfmdrdqdApFO1D0qAQzCVLzl7PVfmZCsD4k4ryuM
//
//
//
//     example how to use api key:
// https://"api.nasa.gov/planetary/apod?api_key=hfmdrdqdApFO1D0qAQzCVLzl7PVfmZCsD4k4ryuM"

const fs = require('fs');
const path = require('path');

const handleHome = (request, response) => {
  const filePath = path.join(__dirname, '..', 'public', 'index.html');
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(500, { 'Content-Type': 'text/html' })
      response.end('<h1>Sorry, there was an error on our side...</h1>')
    } else {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.end(file);
    }
  });
};

const handlePublic = (request, response, url) => {
  const extention = url.split('.')[1];
  const extentionTypes = {
    html: 'text/html',
    js: 'application/javascript',
    css: 'text/css'
  };
  const filePath = path.join(__dirname, '..', url);
  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(404, { 'Content-Type': 'text/html'});
      response.end('<h1>Sooo sorry... I can\'t find this file...</h1>');
    } else {
      response.writeHead(200, { 'Content-Type': 'extentionTypes[extention]' });
      response.end(file);
    }
  });
};

module.exports = {
  handleHome,
  handlePublic
}
