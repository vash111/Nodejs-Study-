async function myFunction() {
    return "Hello, world!";
   //내부에서 return한 값은 자동으로 Promise.resolve()로 감싸집니다.
}
myFunction().then((result) => {
    console.log(result); // "Hello, world!"
});