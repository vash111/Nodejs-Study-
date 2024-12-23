async function getData() {
    try {
    const data1 = await fetchData1();
    const data2 = await fetchData2(data1);
    console.log(data2);
    } catch (error) {
    console.error(error);
    }
}
getData();