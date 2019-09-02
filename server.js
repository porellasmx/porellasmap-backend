const http = require('http');
http
  .createServer((req, res) => {
    res.end();
  })
  .listen(process.env.PORT || 8080);

console.log('Server running at http://127.0.0.1:8080/');
