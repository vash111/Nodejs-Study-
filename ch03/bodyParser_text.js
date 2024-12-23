const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// body-parser 미들웨어 설정
app.use(bodyParser.text({ type: 'text/plain' })); // 텍스트 데이터 처리

app.post('/text', (req, res) => {
    console.log(req.body); // 텍스트 데이터 출력
    res.send(`Received text data: ${req.body}`);
});

app.listen(3000, () => {
    console.log('서버가 http://localhost:3000 에서 실행 중입니다.');
});