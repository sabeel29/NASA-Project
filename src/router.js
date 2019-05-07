const fs = require('fs'); // files system to read files
const path = require('path');
const handlers = require('./handler');

const router = (request, response) => {
  const url = request.url;
  if (url === '/') {
    handlers.handleHome(request, response);

  } else if (url.indexOf('/public') !== -1) {
    handlers.handlePublic(request, response, url);

  } else {
    response.writeHead(404, { 'Content-Type': 'text/html'});
    response.end('<h1> VERY SORRY , 404 NOT Found</h1>')
  }
};

module.exports = router;
