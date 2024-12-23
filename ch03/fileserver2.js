const net = require('net'); 
const fs = require('fs');  
const path = require('path'); 

// 파일 경로 설정 (데이터를 저장할 파일)
const filePath = path.join(__dirname, 'data.txt');

const server = net.createServer( (socket) => {
    console.log('클라이언트가 연결되었습니다.');

    socket.on('data', (data) => {
        const message = data.toString().trim();
        console.log(`수신된 데이터: ${message}`);

        if (message === 'READ') {
	   fs.readFile(filePath, 'utf8', (err, fileData) => {
                if (err) {
                    console.error('파일 읽기 오류:', err);
                    socket.write('파일을 읽을 수 없습니다.\n');
                } else {
                    socket.write(`파일 내용: \n${fileData}\n`);
                }
            });
       } else {
         fs.appendFile(filePath, message + '\n', (err) => {
                if (err) {
                    console.error('파일 기록 오류:', err);
                    socket.write('파일에 데이터를 기록할 수 없습니다.\n');
                } else {
                    console.log('파일에 데이터가 기록되었습니다.');
                    socket.write('데이터가 파일에 성공적으로 기록되었습니다.\n');
                }
            });
     }
   });
   
   socket.on('end', () => {
        console.log('클라이언트가 연결을 종료했습니다.');
    });

  socket.on('error', (err) => {
        console.error('소켓 오류:', err);
    });
});

server.listen(3000, ()=>    {
    console.log('TCP File서버가 3000포트에서 대기 중입니다...');
});