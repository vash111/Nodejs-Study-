const connect = require('connect');
const http = require('http');
const morgan = require('morgan');
const app = connect(); // Connect 앱 생성
//app.use(morgan('dev')); // Morgan 미들웨어 추가 (요청 로깅)
app.use(morgan('combined')); // Morgan 미들웨어 추가 (요청 로깅)
app.use((req, res) => { // 응답 처리 미들웨어
 res.setHeader('Content-Type', 'text/plain;charset=utf-8');
 res.end('Hello, Connect with Morgan!');
});
http.createServer(app).listen(3000, () => { // 서버 실행
 console.log('서버가 http://localhost:3000 에서 실행 중입니다.');
});