const http = require('http');
const express = require('express');
const app = express();
const router = express.Router();
// CORS를 해결하기 위한 미들웨어
const cors = require('cors');
// CORS미들웨어 설정
app.set('port', 8888);



router.route("/plus/:a/:b").get((req, res)=>{
    let a = req.params.a; // 문자열 타입
    let b = req.params.b; 
    console.log(a, b)
    let result = Number(a) + Number(b); // number type
    res.end(String(result));
})

router.route("/minus/:a/:b").get((req, res)=>{
    let a = req.params.a; // 문자열 타입
    let b = req.params.b; 
    res.end(String(parseInt(a) - parseInt(b)));
})

router.route("/mult/:a/:b").get((req, res)=>{
    res.end(String(parseInt(req.params.a) * parseInt(req.params.b)));
})

router.route("/div/:a/:b").get((req, res)=>{
    res.end(String(parseInt(req.params.a) / parseInt(req.params.b)));
})

app.use(cors());
app.use('/', router);

const server = http.createServer(app);
app.listen(app.get('port'), () => {
    console.log('localhost:', app.get('port'));
})