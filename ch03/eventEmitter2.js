//비동기 작업에서 이벤트 사용
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
// 파일 읽기 함수(비동기 작업 시뮬레이션)
const readFileAsync = (fileName) => {
 setTimeout(() => {
 eventEmitter.emit('fileRead', fileName);
 }, 1000);
};
// 'fileRead' 이벤트 처리
eventEmitter.on('fileRead', (fileName) => {
 console.log(`${fileName} 파일을 성공적으로 읽었습니다.`);
});
// 파일 읽기 비동기 작업 호출
readFileAsync('example.txt');