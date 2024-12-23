const fs = require('fs');
// 파일 읽기 예시
fs.readFile('example.txt', 'utf8', (err, data) => {
 if (err) {
 console.error(err);
 return;
 }
 console.log(data);
});