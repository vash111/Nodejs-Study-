const http = require('http');
const bodyParser = require('body-parser');
const finalhandler = require('finalhandler');
const url = require('url');
const querystring = require('querystring');
const connect = require('connect');
const app = connect();

app.use(bodyParser.json());  // JSON 형식의 데이터 파싱
app.use(bodyParser.urlencoded({ extended: true })); // URL-encoded 형식의 데이터 파싱

app.use((req, res, next) => {
     if (req.method === 'POST') {
         res.writeHead(200, { 'Content-Type': 'application/json' });
         res.end(JSON.stringify({
              message: '데이터를 성공적으로 수신했습니다.',
              receivedData: req.body
         }));
   } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

const server = http.createServer((req, res) => {
    app(req, res, finalhandler(req, res));
});

server.listen(3000, () => {
    console.log('서버가 http://localhost:3000 에서 실행 중입니다.');
});