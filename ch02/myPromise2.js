const myPromise = new Promise((resolve, reject) => {
    // 비동기 작업 수행
    let success = true;
    if (success) {
    resolve("작업이 성공적으로 완료되었습니다!");
    } else {
    reject("작업이 실패했습니다.");
    }
   });