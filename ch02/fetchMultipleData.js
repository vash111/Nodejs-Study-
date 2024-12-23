async function fetchMultipleData() {
    const [data1, data2, data3] = await Promise.all([
    fetchData1(),
    fetchData2(),
    fetchData3()
    ]);
    console.log(data1, data2, data3); // 모든 데이터가 완료된 후 출력
}
fetchMultipleData();