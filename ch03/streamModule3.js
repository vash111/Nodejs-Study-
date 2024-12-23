//Duplex Stream : 네트워크 소켓 같은 경우에 자주 사용되며, 읽기와 쓰기를 동시에 처리
const { Duplex } = require('stream');
const duplexStream = new Duplex({
 read(size) {
 this.push('Hello');
 this.push(null); // 데이터 스트림 끝
 },
 write(chunk, encoding, callback) {
 console.log('Writing:', chunk.toString());
 callback();
 }
});
duplexStream.on('data', (chunk) => { //읽은 데이터를 처리
 console.log('Read:', chunk.toString());
});
duplexStream.write('World!');
duplexStream.end();