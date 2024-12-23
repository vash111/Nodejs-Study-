const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
       if (req.method === 'GET'){
         if (req.url === '/' || req.url === '/index.html') {   
             console.log(req)
            const filePath = path.join(__dirname, 'index.html');  // HTML 파일 경로
              // HTML 파일을 읽어 클라이언트에게 전송
              fs.readFile(filePath, 'utf8', (err, data) => {
                 if (err) {      
                      // 파일 읽기 에러 발생 시500 응답 전송
                      res.writeHead(500, { 'Content-Type': 'text/plain' });
                      res.end('500 - Internal Server Error');
                } else {        
           // 파일 성공적으로 읽었을경우200 응답과함께전송
             res.writeHead(200, { 'Content-Type': 'text/html' });
             res.end(data);
            }
       });
   } else {        
      // 요청한 파일이 없을경우404 응답 전송
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 - Not Found');
    }
  }else if (req.method === 'POST') {
        let body = '';
        
        // 데이터가 들어올 때마다 호출됨
        req.on('data', (chunk) => {
            body += chunk;
        });
        // 데이터 수신이 완료되었을 때 호출됨
        req.on('end', () => {
            res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end(`받은 데이터: ${body}`);
        });
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('POST 요청만 가능합니다.');
    }
});
server.listen(3000, () => {
    console.log('서버가 3000번 포트에서 실행 중입니다.');
});