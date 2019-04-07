const http = require('http');
const express = require('express');
const app = express();
// app.set('port', 8888);

const server = http.createServer(app);
app.listen(8888, function() {
    console.log('localhost:8888');
})