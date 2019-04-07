const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors');
const router = express.Router();

app.set('port', 3000);
app.use(cors());

let messages = [];

router.route("/recive").get((req, res) => {
    console.log("/recive 요청됨.");
    if(req.query.size >= messages.length ) {
        res.end();
    } else {
        let result = {
            total: messages.length,
            messages: messages.slice(req.query.size)
        }
        
        res.end(JSON.stringify(result));
    }
});

router.route("/send").get((req, res) => {
    console.log("/send 요청됨.");
    messages.push({
        sender: req.query.sender,
        message: req.query.message
    });
    res.end();
});

app.use('/', router);
const server = http.createServer(app);
server.listen(app.get('port'), ()=>{
    console.log('http://localhost:' + app.get('port'));
});