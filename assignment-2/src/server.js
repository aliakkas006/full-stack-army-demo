import app from './app.js';
import http from 'http';

const server = http.createServer(app);

server.listen(4000, () => {
  console.log('Server is listening on port -> 4000');
});
