//[비동기 Promise또는  async, await를 사용하지 않은 경우..]
const fs = require('fs');

// file1.txt를 읽고, 그 내용을 result.txt에 작성
fs.readFile('file1.txt', 'utf8', (err, data1) => {
    if (err) {
        return console.error('Error reading file1:', err);
    }

    // file1의 내용을 result.txt에 쓰기
    fs.writeFile('result.txt', data1, (err) => {
        if (err) {
            return console.error('Error writing result.txt:', err);
        }

        // file2.txt를 읽고, 그 내용을 result.txt에 이어서 쓰기
        fs.readFile('file2.txt', 'utf8', (err, data2) => {
            if (err) {
                return console.error('Error reading file2:', err);
            }

            // file2의 내용을 result.txt에 덧붙이기
            fs.appendFile('result.txt', '\n' + data2, (err) => {
                if (err) {
                    return console.error('Error appending to result.txt:', err);
                }

                // file3.txt를 읽고, 그 내용을 result.txt에 이어서 쓰기
                fs.readFile('file3.txt', 'utf8', (err, data3) => {
                    if (err) {
                        return console.error('Error reading file3:', err);
                    }

                    // file3의 내용을 result.txt에 덧붙이기
                    fs.appendFile('result.txt', '\n' + data3, (err) => {
                        if (err) {
                            return console.error('Error appending to result.txt:', err);
                        }

                        console.log('All files have been successfully merged into result.txt');
                    });
                });
            });
        });
    });
});