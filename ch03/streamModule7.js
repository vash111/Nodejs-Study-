//읽기 스트림 → 변환 스트림 → 쓰기 스트림으로 연결하여 데이터의 흐름을 제어
const { Transform } = require('stream');
// 대문자로 변환하는 텍스트 변환 스트림 정의
const upperCaseTransform = new Transform({
 transform(chunk, encoding, callback) {
 // 데이터(chunk)를 대문자로 변환
 this.push(chunk.toString().toUpperCase());
 callback();
 }
});
const readStream = fs.createReadStream('input.txt', 'utf8');
const writeStream = fs.createWriteStream('output.txt');
// 변환 스트림을 통해 읽기 스트림에서 데이터를 받아 변환 후 쓰기 스트림으로 전달
readStream.pipe(upperCaseTransform).pipe(writeStream);
writeStream.on('finish', () => {
 console.log('변환 및 파일 쓰기 완료');
});