//Node.js v10 이후로는 url.parse() 대신 URL 클래스를 사용해 URL을 다룰 수 있습니다
const { URL } = require('url');
// URL 파싱
const myUrl = new URL('https://www.example.com:8080/path/name?query=test#hash');
console.log('Href:', myUrl.href); // 전체 URL
console.log('Protocol:', myUrl.protocol); // 프로토콜 (https:)
console.log('Host:', myUrl.host); // 호스트와 포트 (www.example.com:8080)
console.log('Hostname:', myUrl.hostname); // 호스트 (www.example.com)
console.log('Port:', myUrl.port); // 포트 (8080)
console.log('Pathname:', myUrl.pathname); // 경로 (/path/name)
console.log('Search:', myUrl.search); // 쿼리 스트링 (?query=test)
console.log('Hash:', myUrl.hash); // 해시 (#hash)
// 검색 파라미터 추가 및 수정
myUrl.searchParams.append('newQuery', 'value');
console.log('Updated Search:', myUrl.search); // 수정된 쿼리 스트링 (?query=test&newQuery=value)