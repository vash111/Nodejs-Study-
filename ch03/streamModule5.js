//pipe()는 Readable Stream과 Writable Stream을 연결하는 메서드
const fs = require('fs');
const readStream = fs.createReadStream('source.txt');
const writeStream = fs.createWriteStream('destination.txt');
// 파이프: 읽기 스트림을 쓰기 스트림으로 연결
readStream.pipe(writeStream);
// 'finish' 이벤트: 파일 복사가 완료되면 호출됨
writeStream.on('finish', () => {
 console.log('파일 복사 완료');
});