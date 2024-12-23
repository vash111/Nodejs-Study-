//네트워크 소켓과 같이 데이터를 양방향으로 주고받을 수 있는 양방향 스트림
const net = require('net');
const server = net.createServer((socket) => { // 서버 생성
 socket.write('환영합니다!\n');

 // 클라이언트에서 보낸 데이터를 읽고 다시 클라이언트에 전송
 socket.on('data', (data) => {
 socket.write(`받은 데이터: ${data}`);
 });
 // 연결 종료
 socket.on('end', () => {
 console.log('클라이언트 연결 종료');
 });
});
server.listen(3000, () => {
 console.log('서버가 3000 포트에서 대기 중입니다.');
});