const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



/* => 설명( 동일한 내용 )
var server = http.createServer();
const server = http.createServer(function(req, res){

});
server.listen(port, hostname,function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/
