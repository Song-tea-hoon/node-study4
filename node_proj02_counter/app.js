const http = require('http');
const express = require('express');
const cors = require('cors');
const app = express();
const router = express.Router();

app.set('port', 3000)
app.use(cors());

let cnt = 0;
router.route('/count').get( (req, res)=>{
    console.log('/count 요청 됨')
    cnt++;
    let date = new Date();
    let resData = {
        "dateStr": date.getHours() + " : " + date.getMinutes(),
        "count": cnt
    }
    
    res.end(JSON.stringify(resData));
})

app.use('/', router);
const server = http.createServer(app);
server.listen(app.get('port'), ()=>{
    console.log('http://localhost:' + app.get('port'));
})