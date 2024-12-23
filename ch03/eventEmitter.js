//여러 이벤트 리스너 등록
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
// 첫 번째 리스너
eventEmitter.on('data', () => {
 console.log('첫 번째 리스너 호출');
});
// 두 번째 리스너
eventEmitter.on('data', () => {
 console.log('두 번째 리스너 호출');
});
// 'data' 이벤트 발생
eventEmitter.emit('data');