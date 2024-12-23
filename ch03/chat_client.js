// chat_client.js
const net = require('net');
const readline = require('readline');
// readline 인터페이스 생성
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// 서버에 연결
const client = net.createConnection({ port: 5000 }, () => {
    console.log('Connected to chat server.');
    rl.prompt();
});
// 서버로부터 데이터 수신
client.on('data', (data) => {
    console.log(`Server: ${data}`);
    rl.prompt();
});
// 연결 종료 시
client.on('end', () => {
    console.log('Disconnected from chat server.');
    rl.close();
});
// 에러 처리
client.on('error', (err) => {
    console.log(`Client error: ${err.message}`);
});
// 사용자 입력을 서버로 전송
rl.on('line', (input) => {
    client.write(input);
    rl.prompt();
});
//node chat_client.js