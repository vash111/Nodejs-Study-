const { URL } = require('url');
const myUrl = new URL('https://www.example.com:8080/pathname?name=John&age=30#hash');
console.log(myUrl.href ); console.log(myUrl.origin); //
console.log(myUrl.protocol); // 'https:'
console.log(myUrl.host); // 'www.example.com:8080'
console.log(myUrl.pathname); // '/pathname'
console.log(myUrl.searchParams.get('name')); // 'John‘
// 쿼리 매개변수 추가
myUrl.searchParams.append('city', 'New York');
console.log(myUrl.href );
// 쿼리 매개변수 수정
myUrl.searchParams.set('age', '40');
console.log(myUrl.href );
// 쿼리 매개변수 삭제
myUrl.searchParams.delete('name');
console.log(myUrl.href );