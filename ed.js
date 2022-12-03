const http = require('http');

const hostname = '127.0.0.1';
const port = 42069;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('<img src="https://static.wikia.nocookie.net/roblox/images/1/1d/Roblox-Gametest1-2016.png/revision/latest/scale-to-width-down/1000?cb=20160206194450"><br><br><h1>carly its real test site!!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
