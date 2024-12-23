//Transform Stream : 데이터를 읽으면서 동시에 데이터를 변형 (파일을 읽으면서 데이터를 압축하거나 암호화하는 경우에 사용)
const { Transform } = require('stream');
const upperCaseTransform = new Transform({
 transform(chunk, encoding, callback) {
 // 받은 청크 데이터를 대문자로 변환하여 push
 this.push(chunk.toString().toUpperCase());
 callback();
 }
});
// 입력 스트림
const readableStream = fs.createReadStream('example.txt', { encoding: 'utf8' });
// 출력 스트림
const writableStream = fs.createWriteStream('output.txt');
// 스트림 연결 (읽기 스트림 -> 변형 스트림 -> 쓰기 스트림)
readableStream.pipe(upperCaseTransform).pipe(writableStream);
writableStream.on('finish', () => {
 console.log('File successfully transformed and written.');
});