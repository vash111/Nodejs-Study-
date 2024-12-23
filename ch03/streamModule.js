//네트워크 요청 등의 데이터 소스로부터 데이터를 읽어올 때
const fs = require('fs');
const readStream = fs.createReadStream('example.txt', 'utf8'); // 읽기 스트림 생성
readStream.on('data', (chunk) => { // 'data' 이벤트: 데이터를 조각 단위로 읽을 때 발생
 console.log('데이터 조각:', chunk);
});
readStream.on('end', () => { // 'end' 이벤트: 읽기가 끝났을 때 발생
 console.log('파일 읽기 완료');
});
readStream.on('error', (err) => { // 'error' 이벤트: 에러 발생 시 처리
 console.error('읽기 중 에러 발생:', err);
});