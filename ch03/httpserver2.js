//POST요청만 처리하는 (서비스하는) httpserver2.js
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
        
        // 데이터가 들어올 때마다 호출됨
        req.on('data', (chunk) => {
            body += chunk;
        });
        // 데이터 수신이 완료되었을 때 호출됨
        req.on('end', () => {
            res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end(`받은 데이터: ${body}`);
        });
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('POST 요청만 가능합니다.');
    }
});
server.listen(3000, () => {
    console.log('서버가 3000번 포트에서 실행 중입니다.');
});