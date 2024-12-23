// chat_server.js
const net = require('net');
// 클라이언트 목록을 저장할 배열
const clients = [];
// 서버 생성
const server = net.createServer((socket) => {
    // 클라이언트가 연결되었을 때
    socket.write('Welcome to the chat!\n');
    clients.push(socket);
    // 클라이언트의 데이터를 다른 모든 클라이언트에게 브로드캐스트
    socket.on('data', (data) => {
        clients.forEach((client) => {
            if (client !== socket) {
                client.write(data);
            }
        });
    });
    // 클라이언트 연결 종료 시
    socket.on('end', () => {
        clients.splice(clients.indexOf(socket), 1);
        console.log('A client has disconnected.');
    });
    // 에러 처리
    socket.on('error', (err) => {
        console.log(`Socket error: ${err.message}`);
    });
});
// 서버 시작
const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Chat server is running on port ${PORT}`);
});
//node chat_server.js