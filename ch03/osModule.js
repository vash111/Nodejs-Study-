const os = require('os');
// 1. OS 정보
console.log('운영 체제:', os.type()); // 운영 체제 종류
console.log('플랫폼:', os.platform()); // 플랫폼 정보
console.log('버전:', os.release()); // 운영 체제 버전
console.log('아키텍처:', os.arch()); // CPU 아키텍처
// 2. 시스템 메모리 정보
console.log('총 메모리:', os.totalmem(), 'bytes'); // 총 메모리
console.log('사용 가능한 메모리:', os.freemem(), 'bytes'); // 사용 가능한 메모리
// 3. CPU 정보
console.log('CPU 정보:', os.cpus()); // CPU의 정보 배열
console.log('CPU 수:', os.cpus().length); // CPU 수
// 4. 네트워크 정보
const networkInterfaces = os.networkInterfaces();
console.log('네트워크 인터페이스:', networkInterfaces); // 네트워크 인터페이스 정보
// 5. 홈 디렉토리 및 사용자 정보
console.log('사용자 홈 디렉토리:', os.homedir()); // 사용자 홈 디렉토리
console.log('현재 사용자 정보:', os.userInfo()); // 현재 사용자 정보
const os = require('os');
const freeMemory = os.freemem();
const totalMemory = os.totalmem();
const usedMemory = totalMemory - freeMemory;
console.log(`총 메모리: ${totalMemory} bytes`);
console.log(`사용 중인 메모리: ${usedMemory} bytes`);
console.log(`여유 메모리: ${freeMemory} bytes`);
//const networkInterfaces = os.networkInterfaces();
console.log(networkInterfaces);