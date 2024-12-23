const server = net.createServer( { allowHalfOpen: true }, (socket) => {
    socket.on('end', () => {
    console.log('클라이언트가 연결을 닫았습니다.');
    // 서버에서는 여전히 데이터를 보낼 수 있음
    socket.write('서버에서 아직 데이터를 보낼 수 있습니다.');
    });
   });
   server.listen(3000);