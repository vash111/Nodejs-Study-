const net = require('net'); 
const readline = require('readline'); 

const client = new net.Socket();
client.connect(3000,  '127.0.0.1', () => {
    console.log('서버에 연결되었습니다.');
    client.write('안녕하세요, 서버!');    
  });
client.on('data', (data) => {
    console.log(`서버로부터 수신된 데이터: ${data.toString()}`);
});
client.on('close', () => {
    console.log('서버와의 연결이 종료되었습니다.');
});
client.on('error', (err) => {
    console.error(`소켓 오류: ${err.message}`);
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', (input) => {
    client.write(input); 
});