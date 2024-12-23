const http = require('http');
const server = http.createServer((req, res) => {
 const jsonResponse = {
 message: 'Hello, World!',
 status: 'success'
 };
 res.writeHead(200, { 'Content-Type': 'application/json' });
 res.end(JSON.stringify( jsonResponse));
});
server.listen(3000, () => {
 console.log('서버가 3000번 포트에서 실행 중입니다.');
});