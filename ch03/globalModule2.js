// 2초 후에 한 번 실행
global.setTimeout(() => {
    console.log('This runs after 2 seconds');
   }, 2000);
   // 1초마다 반복 실행
   const intervalId = global.setInterval(() => {
    console.log('This runs every 1 second');
   }, 1000);
   // 5초 후에 반복 실행 중지
   global.setTimeout(() => {
    global.clearInterval(intervalId);
    console.log('Interval cleared');
   }, 5000);