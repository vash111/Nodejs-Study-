// Promise 체이닝 방식
fetchData1()
 .then((data1) => {
 return fetchData2(data1);
 })
 .then((data2) => {
 console.log(data2);
 })
 .catch((error) => {
 console.error(error);
 });