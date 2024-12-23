const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// body-parser 미들웨어 설정
app.use(bodyParser.json()); // JSON 형태의 요청 데이터를 파싱
app.use(bodyParser.urlencoded({ extended: true })); // URL-encoded 데이터 파싱
app.post('/submit', (req, res) => { // POST 요청 처리
 console.log(req.body); // 파싱된 요청 본문 데이터 출력
 res.send(`Received data: ${JSON.stringify(req.body)}`);
});
app.listen(3000, () => { // 서버 실행
 console.log('서버가 http://localhost:3000 에서 실행 중입니다.');
});