// HTTP 서버에서 이벤트 처리
const http = require('http');
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
const server = http.createServer((req, res) => {
 if (req.url === '/') {
 eventEmitter.emit('homeRequest');
 res.end('Home Page');
 } else {
 res.end('Other Page');
 }
});
eventEmitter.on('homeRequest', () => {
 console.log('홈 페이지에 대한 요청이 발생했습니다.');
});
server.listen(3000, () => {
 console.log('Server is running on port 3000');
});