const net = require('net');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const client = new net.Socket();
client.connect(5000,  '210.181.145.241', () => {
    console.log('채팅 서버에 연결되었습니다.');  
    rl.setPrompt('메시지를 입력하세요: ');
    rl.prompt();

   rl.on('line', (line) => {
       client.write(line);
        rl.prompt();
  });
});

client.on('data', (data) => {
  console.log(data.toString());
});

client.on('end', () => {
  console.log('서버와의 연결이 종료되었습니다.');
  rl.close();
});

client.on('error', (err) => {
  console.error('서버와의 통신 중 에러 발생:', err);
  rl.close();
});