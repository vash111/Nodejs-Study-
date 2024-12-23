//net 모듈은 TCP 또는 IPC(Inter-Process Communication) 소켓을 다루는 데 사용
const net = require('net');
// 클라이언트 생성 및 서버에 연결
const client = net.createConnection({ port: 3000 }, () => {
 console.log('서버에 연결되었습니다.');
 // 서버에 메시지 전송
 client.write('안녕하세요, 서버님!');
});
client.on('data', (data) => { // 서버로부터 데이터를 수신할 때
 console.log(`서버로부터 받은 데이터: ${data}`);
 // 데이터를 받은 후 연결 종료
 client.end();
});
client.on('end', () => { // 연결이 종료되었을 때
 console.log('서버와의 연결이 종료되었습니다.');
});
client.on('error', (err) => { // 에러가 발생했을 때 처리
 console.error('클라이언트 에러:', err);
});