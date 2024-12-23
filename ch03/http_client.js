const http = require('http');
const options = { // 옵션 설정
 hostname: 'jsonplaceholder.typicode.com',
 path: '/posts/1',
 method: 'GET'
};
const req = http.request(options, (res) => { // 요청 생성
 let data = '';
 res.on('data', (chunk) => { // 응답 데이터가 조각(chunk) 단위로 들어옴
 data += chunk;
 });
 res.on('end', () => { // 응답 데이터 수신 완료 시 처리
 console.log('응답 본문:', data);
 });
});
req.on('error', (err) => { // 에러 처리
 console.error(`에러 발생: ${err.message}`);
});
req.end(); // 요청 완료