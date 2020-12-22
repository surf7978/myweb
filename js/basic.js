let num = 10, num3 = 20;

let result = num +num3;
console.log("result: " + result + " 입니다."); 

if(result > 30){
    console.log("30보다 크다.");
} else {
    document.write("<h1>30보다 작거나 같다.</h1>");
}


var str = 'Hello, World';
str = 25;
str = 1 < 2;
str = null;
str = function(){
    console.log('function');
}
str = 10+20;
console.log(typeof str, str); //typeof 무슨타입인지 콘솔에 출력

num1 = 10; //var 변수선언 없이 바로쓰일수도있음
console.log(num1);

var str = "reload"; //다시 var 선언해도 됨
console.log(str);

let num2 = 20; //var랑 달리 let은 다시 선언 못 함(syntax 에러뜸)
console.log(num2);
// let num2 = 30;
// console.log(num2);