const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve("데이터를 성공적으로 가져왔습니다!");
    }, 1000);
   });
   fetchData
    .then((result) => {
    console.log(result); // "데이터를 성공적으로 가져왔습니다!"
    return "다음 작업을 처리합니다.";
    })
    .then((nextResult) => {
    console.log(nextResult); // "다음 작업을 처리합니다."
    })
    .catch((error) => {
    console.error(error);
    });
   //첫 번째 then() 메서드가 실행된 후, 반환된 값이 두 번째 then()으로 전달됩니다. 