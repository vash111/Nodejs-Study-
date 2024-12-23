fs.readFile('file1.txt', 'utf8', (err, data1) => {
    if (err) throw err;
    fs.readFile('file2.txt', 'utf8', (err, data2) => {
    if (err) throw err;
    console.log(data1, data2);
    });
   });