async function slowExecution() {
    const data1 = await fetchData1(); // 첫 번째 요청이 끝날 때까지 기다림
    const data2 = await fetchData2(); // 두 번째 요청이 시작됨
    console.log(data1, data2);
}