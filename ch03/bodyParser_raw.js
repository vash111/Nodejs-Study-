const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// body-parser 미들웨어 설정
app.use(bodyParser.raw({ type: 'application/octet-stream' })); // 바이너리 데이터 처리

app.post('/raw', (req, res) => {
    console.log(req.body); // Buffer 데이터 출력
    res.send(`Received raw data of length: ${req.body.length}`);
});

app.listen(3000, () => {
    console.log('서버가 http://localhost:3000 에서 실행 중입니다.');
});