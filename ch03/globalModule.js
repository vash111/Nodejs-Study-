console.log(__dirname); // 현재 스크립트 파일의 디렉토리 경로
console.log(__filename); // 현재 스크립트 파일의 전체 경로
console.log(process.platform); // 현재 운영 체제의 플랫폼
console.log(process.env.NODE_ENV); // 환경 변수 읽기
console.log('Node.js Version:', process.version); // Node.js 버전
console.log('Process ID:', process.pid); // 프로세스 ID
console.log('Current Working Directory:', process.cwd()); // 현재 작업 디렉토리
const fs = require('fs'); // 파일 시스템 모듈을 가져옴
module.exports = {
 myFunction: function() {
 console.log('이 함수는 다른 모듈에서 사용할 수 있습니다.');
 }
};
global.myVar = 'Hello'; // 전역 변수 선언
console.log(global.myVar); // 'Hello' (전역 변수 접근 가능)