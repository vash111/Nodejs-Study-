const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res) => { // 서버 생성
 // 클라이언트 요청에 따른 라우팅 처리
    if (req.url === '/' || req.url === '/index.html') {
        const filePath = path.join(__dirname, 'index.html'); // HTML 파일 경로
        // HTML 파일을 읽어 클라이언트에게 전송
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) { // 파일 읽기 에러 발생 시 500 응답 전송
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('500 - Internal Server Error');
            } else { // 파일 성공적으로 읽었을 경우 200 응답과 함께 전송
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else { // 요청한 파일이 없을 경우 404 응답 전송
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - Not Found');
    }
});
server.listen(3000, () => {
 console.log('서버가 http://localhost:3000 에서 실행 중입니다.');
});