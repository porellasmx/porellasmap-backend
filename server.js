const http = require('http');
const app = require('./app');

const port = process.env.PORT || 8080;
app.set('port', port);
http.createServer(app).listen(port);

console.log('Server running at http://127.0.0.1:8080/');
