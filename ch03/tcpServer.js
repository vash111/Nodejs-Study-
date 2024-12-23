//net 모듈은 TCP 또는 IPC(Inter-Process Communication) 소켓을 다루는 데 사용
const net = require('net');
const server = net.createServer((socket) => { // 서버 생성
 console.log('클라이언트가 연결되었습니다.');
 socket.write('환영합니다! 클라이언트!\n'); // 클라이언트에게 환영 메시지 전송

 socket.on('data', (data) => { // 클라이언트로부터 데이터가 수신될 때 발생
 console.log(`클라이언트로부터 받은 데이터: ${data}`);
 // 클라이언트로 받은 데이터를 다시 전송 (Echo 서버처럼 동작)
 socket.write(`서버에서 echo: ${data}`);
 });
 socket.on('end', () => { // 클라이언트 연결이 종료될 때 발생
 console.log('클라이언트 연결 종료');
 });
 socket.on('error', (err) => { // 에러가 발생했을 때 처리
 console.error('서버 에러:', err);
 });
});
server.listen(3000, () => { // 서버를 3000 포트에서 대기
 console.log('서버가 3000 포트에서 대기 중입니다.');
});