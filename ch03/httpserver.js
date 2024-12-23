const http = require('http');
 // HTTP 서버 생성
const server = http.createServer((req, res) => {
 // 요청된 URL 경로에 따라 다른 응답처리
if (req.url === '/') {
 res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
 res.end('홈페이지입니다.');
 } else if (req.url === '/about') {
 res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' });
 res.end('소개 페이지입니다.');
 } else {
 res.writeHead(404, { 'Content-Type': 'text/plain;charset=utf-8' });
 res.end('페이지를 찾을 수 없습니다.');
 }
 });
 // 서버를 3000번 포트에서 대기
server.listen(3000, () => {
 console.log('서버가 3000번 포트에서 실행 중입니다.');
 });