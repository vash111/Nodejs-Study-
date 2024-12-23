//파일에 데이터를 쓰거나 네트워크에 데이터를 전송할 때
const fs = require('fs');
const writeStream = fs.createWriteStream('output.txt'); // 쓰기 스트림 생성
writeStream.write('첫 번째 줄\n'); // 데이터 쓰기
writeStream.write('두 번째 줄\n');
// 'finish' 이벤트: 모든 데이터 쓰기가 완료되었을 때 발생
writeStream.end('마지막 줄\n’);
writeStream.on('finish', () => {
 console.log('파일 쓰기 완료');
});
writeStream.on('error', (err) => { // 'error' 이벤트: 에러 발생 시 처리
 console.error('쓰기 중 에러 발생:', err);
});