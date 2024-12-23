const connect = require('connect');
const http = require('http');
const app = connect(); // Connect 앱 생성
app.use((req, res, next) => { // 미들웨어 추가
    console.log('첫 번째 미들웨어 실행');
    console.log(`${req.method} ${req.url}`); //로그 기록 미들웨어
    next(); // 다음 미들웨어로 넘어감
});
app.use((req, res, next) => { //응답 처리 미들웨어
    console.log('두 번째 미들웨어 실행');
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from Connect!');
});
http.createServer(app).listen(3000, () => {// 서버 실행
console.log('서버가 http://localhost:3000 에서 실행 중입니다.');
});