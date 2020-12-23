function sum1(num1, num2) {
    let result = num1 +num2;
    console.log(result);
    return result;
}

let result = sum1('10','20'); //문자열로 하면 10+20=1020으로 나옴
document.write('<h1>'+result+'</h1>');

let myfunc = function (a, b) {
    let result = a * b;
    console.log('Hello');
    return result;
}
 
let yourfunc = myfunc
result = yourfunc(4, 6); //a, b값 안 넣으면 NaN=Not a 으로 출력
console.log(result);

let theotherfunc = function (n1, n2){
    return n1/n2;
}

function otherfunc(a,b, funcdef) {
    let result = funcdef(a, b);
    console.log('result: '+result);
}
otherfunc(20, 30, myfunc);
otherfunc(20, 30, theotherfunc); //func안에 넣는 function 콜드펑션?