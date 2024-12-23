async function fetchData() {
    try {
    const data = await new Promise((resolve, reject) => {
    setTimeout(() => {
    reject("데이터를 가져오는 데 실패했습니다.");
    }, 1000);
    });
    console.log(data); // 실행되지 않음
    } catch (error) {
    console.error(error); // "데이터를 가져오는 데 실패했습니다."
    }
}
fetchData();