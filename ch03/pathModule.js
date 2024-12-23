const path = require('path');
// join: 상대 경로로 결합
const joinedPath = path.join('project', 'files', 'image.png');
console.log('Joined Path:', joinedPath); // 결과: 'project/files/image.png'
// resolve: 절대 경로로 반환
const resolvedPath = path.resolve('project', 'files', 'image.png');
console.log('Resolved Path:', resolvedPath); // 결과: 절대 경로 (현재 작업 디렉토리 기준);
const path = require('path');
// 파일 경로 예시
const filePath = '/Users/john/documents/project/index.js';
// 1. 파일명 추출 (basename)
console.log('File name:', path.basename(filePath)); // 결과: 'index.js'
// 2. 디렉토리명 추출 (dirname)
console.log('Directory name:', path.dirname(filePath)); // 결과: '/Users/john/documents/project'
// 3. 확장자 추출 (extname)
console.log('File extension:', path.extname(filePath)); // 결과: '.js'
// 4. 경로 결합 (join)
const combinedPath = path.join('/Users/john', 'documents', 'project', 'index.js');
console.log('Joined path:', combinedPath); // 결과: '/Users/john/documents/project/index.js'
// 5. 절대 경로 만들기 (resolve)
const absolutePath = path.resolve('project', 'index.js');
console.log('Absolute path:', absolutePath); // 결과: 현재 작업 디렉토리 기준으로 절대 경로가 반환됨