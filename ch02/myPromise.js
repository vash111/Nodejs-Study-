myPromise
 .then((result) => {
 console.log(result); // 작업이 성공적으로 완료되었습니다!
 })
 .catch((error) => {
 console.log(error); // 작업이 실패했습니다.
 })
 .finally(() => {
 console.log("비동기 작업이 끝났습니다."); // 항상 실행됨
 });