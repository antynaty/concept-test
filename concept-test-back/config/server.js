const http = require('http');
const app = require('../app');

const port = process.env.PORT || 3030 ;

const server = http.createServer(app); 

server.listen(port, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on PORT:`,port);
});