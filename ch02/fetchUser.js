async function fetchUser() {
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await response.json();
    console.log(user); // API에서 받은 사용자 데이터 출력
    } catch (error) {
    console.error('에러 발생:', error);
    }
}
fetchUser();