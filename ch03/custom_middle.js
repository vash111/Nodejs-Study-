const connect = require('connect');
const http = require('http');
const app = connect(); // Connect 앱 생성
// 커스텀 미들웨어: 요청 URL이 "/hello"일 때만 처리
const helloMiddleware = (req, res, next) => {
 if (req.url === '/hello') {
    res.setHeader('Content-Type', 'text/plain;charset=utf-8');
    res.end('Hello, Custom Middleware!');
 } else {
    next(); // 다음 미들웨어로 넘김
 }
};
app.use(helloMiddleware); // 커스텀 미들웨어 추가
app.use((req, res) => { // 응답 처리 미들웨어
 res.setHeader('Content-Type', 'text/plain;charset=utf-8');
 res.end('다른 경로입니다.');
});
http.createServer(app).listen(3000, () => { // 서버 실행
 console.log('서버가 http://localhost:3000 에서 실행 중입니다.');
});