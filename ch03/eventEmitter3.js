//EventEmitter를 상속하여 사용자 정의 클래스 생성
const EventEmitter = require('events');
// 사용자 정의 클래스
class MyEmitter extends EventEmitter {}
// 인스턴스 생성
const myEmitter = new MyEmitter();
// 이벤트 리스너 등록
myEmitter.on('event', () => {
 console.log('이벤트가 발생했습니다!');
});
// 이벤트 발생
myEmitter.emit('event');