const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, "첫 번째 완료"));
const promise2 = new Promise((resolve) => setTimeout(resolve, 500, "두 번째 완료"));
Promise.race([promise1, promise2])
    .then((result) => {
    console.log(result); // "두 번째 완료"
})
.catch((error) => {
    console.error(error);
});