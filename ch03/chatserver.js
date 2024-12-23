const net = require('net');

let clients = []; // 연결된 클라이언트들을 저장할 배열

const server = net.createServer((socket) => {
   socket.name = socket.remoteAddress + ':' + socket.remotePort;
   clients.push(socket);
  console.log(`${socket.name}가 연결되었습니다.`);
  
   // 모든 클라이언트에게 메시지를 브로드캐스트하는 함수
  function broadcast(message, sender) {
    clients.forEach((client) => {
       if (client !== sender) {
        client.write(message);
      }
    });
   process.stdout.write(message);
  }

  socket.on('data', (data) => {
    const message = `${socket.name}: ${data}`;
    broadcast(message, socket);
  });

  socket.on('end', () => {
    console.log(`${socket.name}가 연결을 종료했습니다.`);
    clients = clients.filter((client) => client !== socket); // 연결 종료된 클라이언트 제거
  });

  socket.on('error', (err) => {
    console.error('에러 발생:', err);
  });
});

  server.listen(5000, () => {
  console.log('채팅 서버가 5000 포트에서 대기 중입니다.');
});