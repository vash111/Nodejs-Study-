const server = net.createServer((socket) => {
    socket.write('Unix 도메인 소켓 서버에 연결되었습니다.');
    socket.pipe(socket); // Echo 서버처럼 동작
   });
   server.listen('/tmp/echo.sock', () => {
    console.log('Unix 도메인 소켓 서버가 시작되었습니다.');
   });