const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
// 'start'라는 이름의 이벤트에 대한 핸들러(콜백)를 등록
eventEmitter.on('start', (message) => {
 console.log(`이벤트 발생: ${message}`);
});
// 이벤트 발생
eventEmitter.emit('start', '서버 시작 중...');