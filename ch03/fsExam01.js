const fs = require('fs');
fs.readFile('example.txt', 'utf8', (err, data) => {
 if (err) {
 console.error(err);
 return;
 }
 console.log(data);
});
fs.writeFile('example.txt', 'Hello, Node.js!', (err) => {
 if (err) {
 console.error(err);
 return;
 }
 console.log('파일이 성공적으로 작성되었습니다.');
});
fs.appendFile('example.txt', '\n새로운 줄 추가', (err) => {
 if (err) {
 console.error(err);
 return;
 }
 console.log('파일에 데이터가 추가되었습니다.');
});