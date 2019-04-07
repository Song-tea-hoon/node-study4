const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors');
const router = express.Router();

app.set('port', 3000);
app.use(cors());

let messages = [];

router.route("/recieve", (req, res) => {
    if(req.query,size >= messages.length ) {
        res.end();
    } else {
        let result = {
            total: messages.length,
            messages: messages.slice(req.query.size)
        }
        
        res.end(JSON.stringify(result));
    }
});

router.route("/send", (req, res) => {
    messages.push({
        sender: req.query.sender,
        maessage: req.query.message
    });
    res.end();
});

app.use('/', router);
const server = http.createServer(app);
server.listen(app.get('port'), ()=>{
    console.log('http://localhost:' + app.get('port'));
});