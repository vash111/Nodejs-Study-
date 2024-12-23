const path = require('path');
// 파일 경로 예시
const filePath = '/Users/john/documents/project/index.js';
// 1. 경로 파싱 (parse)
const parsedPath = path.parse(filePath);
console.log('Parsed Path:', parsedPath);
// 2. 경로 객체를 다시 경로 문자열로 변환 (format)
const formattedPath = path.format(parsedPath);
console.log('Formatted Path:', formattedPath);