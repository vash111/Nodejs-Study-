async function fetchData() {
    const result = await new Promise((resolve) => {
    setTimeout(() => {
    resolve("데이터를 가져왔습니다!");
    }, 1000);
    });
    console.log(result); // "데이터를 가져왔습니다!"
   }
   fetchData();