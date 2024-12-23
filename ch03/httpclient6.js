const http = require('http');

const postData = JSON.stringify({
    name: '김기태',
    email : 'kkt09072@gmail.com'
});

// HTTP 요청 옵션 설정
const options = {
    hostname: 'localhost',  // 서버 주소
    port: 3000,             // 서버 포트
    path: '/',              // 요청 경로
    method: 'POST',         // 요청 방식 (POST)
    headers: {
        'Content-Type': 'application/json',  // 요청 헤더
        'Content-Length': Buffer.byteLength(postData)  // 데이터 길이
    }
};

const req = http.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
   res.on('end', () => {
        console.log('서버로부터 받은 응답:', data);
    });
});

req.on('error', (err) => {
    console.error('요청 중 에러가 발생했습니다:', err);
});

req.write(postData);
req.end();