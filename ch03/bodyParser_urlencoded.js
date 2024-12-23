const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// body-parser 미들웨어 설정
app.use(bodyParser.urlencoded({ extended: true })); // URL-encoded 데이터 파싱

app.post('/urlencoded', (req, res) => {
    console.log(req.body); // 파싱된 URL-encoded 데이터 출력
    res.send(`Received URL-encoded data: ${JSON.stringify(req.body)}`);
});

app.listen(3000, () => {
    console.log('서버가 http://localhost:3000 에서 실행 중입니다.');
});