const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// body-parser 미들웨어 설정
app.use(bodyParser.json()); // JSON 형태의 요청 데이터를 파싱

app.post('/json', (req, res) => {
    console.log(req.body); // 파싱된 JSON 데이터 출력
    res.send(`Received JSON data: ${JSON.stringify(req.body)}`);
});

app.listen(3000, () => {
    console.log('서버가 http://localhost:3000 에서 실행 중입니다.');
});