const promise1 = Promise.resolve("첫 번째 작업 완료");
const promise2 = Promise.resolve("두 번째 작업 완료");
const promise3 = Promise.resolve("세 번째 작업 완료");
Promise.all([promise1, promise2, promise3])
 .then((results) => {
 console.log(results); // ["첫 번째 작업 완료", "두 번째 작업 완료", "세 번째 작업 완료"]
 })
 .catch((error) => {
 console.error(error);
 });