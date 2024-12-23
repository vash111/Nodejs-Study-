//httpserver에 post요청을 하는 httpclient2.js
const http = require('http');

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
};

const req = http.request(options, (res) => {
     let data = '';
     res.on('data', (chunk) => {
        data += chunk;
    });

      res.on('end', () => {  //수신 완료되면 출력
        console.log(`서버로부터 응답: ${data}`);
    });
});

req.on('error', (e) => {
    console.error(`요청 중 오류 발생: ${e.message}`);
});

const postData = 'userid=admin&userpwd=admin1234';

req.write(postData); //

req.end();  //데이터 전송 완료