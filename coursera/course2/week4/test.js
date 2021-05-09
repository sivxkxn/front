// const http = require('http');
// const server = new http.Server();
// let req=http.request({
//     hostname:'localhost',
//     port:8080
// })


server.listen(8081);

const http = require('http');
const server = new http.Server();
server.on('request', function (req, res) {
    console.info(res.statusCode);
    res.setHeader('content-type', 'text/html')
    res.end('Hello, user!');

});
let req = http.request({
    hostname: 'localhost',
    port: 8081
});

req.on('response', function (response) {
    let body = '';
    response.on('data', function (chunk) {
        body += chunk;
    })
    response.on('end', function () {
        console.info(body);
    })
})
// for (let i = 0; i < 5; i++) {
//     let counter = require('./test2.js')();
    
//     console.log(counter);
// }