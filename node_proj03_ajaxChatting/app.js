const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors');
const router = express.Router();

app.set('port', 3000);
app.use(cors());

app.use('/', router);
const server = http.createServer(app);
server.listen(app.get('port'), ()=>{
    console.log('http://localhost:' + app.get('port'));
});