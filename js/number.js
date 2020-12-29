let x = 10;
let y = '20';

let result = x + y; //x도 문자취급함
console.log(result);

result = x + parseInt(y);
console.log(result);

y ='hello';
result = x + parseInt(y);
console.log(result);

x = 10.45;
y = '20.45';
result = x + parseFloat(y);
console.log(result);

result=x/0;
console.log(result);
x = -10.45;
result=x/0;
console.log(result);

x = 10;
y = '5';
result = x / y; //이건 알아서 숫자로 바꿔서 계산해줌
console.log(result);
result = x * y;

function sum(){
    console.clear();
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    console.log(parseInt(num1)+parseInt(num2));
}

console.log(result);
