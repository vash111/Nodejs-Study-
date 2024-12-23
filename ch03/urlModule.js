const url = require('url');
//const parsedUrl = url.parse('https://www.example.com:8080/pathname?name=John&age=30#hash');
//console.log(parsedUrl);
const parsedUrl = url.parse('https://www.example.com/pathname?name=John&age=30', true);
console.log(parsedUrl.query);
const urlObject = { protocol: 'https:', hostname: 'www.example.com',
 port: '8080', pathname: '/pathname', query: { name: 'John', age: '30' }
};
const formattedUrl = url.format(urlObject);
console.log(formattedUrl);
const baseUrl = 'https://www.example.com/path/';
const relativeUrl = 'subpage.html';
const resolvedUrl = url.resolve(baseUrl, relativeUrl);
console.log(resolvedUrl);