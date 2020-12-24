// function nameFunc(){     let name1 = window.prompt('이름을 입력하세요.');     let
// name1 = document.getElementById('name').value;     console.log('입력한 이름은:
// '+name1); } nameFunc();
//100=A, 90=B, 80=C etc=D로 나오게 하시오
let name3;
let name4;
let name5;
let name6;
let name7;

function insertNum() {
    name3 = parseInt(window.prompt('첫번째 숫자를 입력하세요.'));
    name4 = parseInt(window.prompt('두번째 숫자를 입력하세요.'));
    name5 = parseInt(window.prompt('세번째 숫자를 입력하세요.'));
    name6 = parseInt(window.prompt('네번째 숫자를 입력하세요.'));
    name7 = parseInt(window.prompt('다섯번째 숫자를 입력하세요.'));
    console.log(name3, name4, name5, name6, name7);
    return name3, name4, name5, name6, name7;
}
function checkGrade(name3) {
    if (name3 == 100) {
        //document.write("A입니다.");
        console.log("A입니다.");
    } else if (name3 >= 90) {
        //document.write("B입니다.");
        console.log("B입니다.");
    } else if (name3 >= 80) {
        //document.write("C입니다.");
        console.log("C입니다.");
    } else {
        //document.write("D입니다.");
        console.log("D입니다.");
    }
}

function sum3(name3, name4) {
    document.write("<p></p>두 수의 합 : "+(name3 + name4));
    console.log("두 수의 합 : "+(name3 + name4));
}

//입력 받은 두 수 사이의 합을 구하시오 ex) 1, 5 입력>>1+2+3+4+5=10
function diffSum(name3, name4) {
    // let BTWsum = 0;
    // for (let i = parseInt(name3); i <= parseInt(name4); i++) {
    //     BTWsum += i;
    // }
    let a = parseInt(name3);
    let b =parseInt(name4);
    let BTWsum = 0;
    if(b>a){
        BTWsum=(b-a+1)*(a+b)/2;
    } else if(a>b){
        BTWsum=(a-b+1)*(a+b)/2;
    } else{
        BTWsum=a;
    }
    //document.write("<p></p>입력받은 두 수 사이의 합 = " + BTWsum);
    console.log("입력받은 두 수 사이의 합 = " + BTWsum);
}

//숫자 5개 입력하고 5개 숫자와 최대값을 출력하시오 펑션이름은 findMax()
function findMax(name3, name4, name5, name6, name7) {
    let numbers1 = [name3, name4, name5, name6, name7];
    sum2 = 0;
    for (let i = 0; i < numbers1.length; i++) {
        if (numbers1[i] > sum2) {
            sum2 = numbers1[i];
        }
    }
    //document.write("<p></p>입력한 5개의 수 중에 가장 큰 수 : " + sum2);
    console.log("입력한 5개의 수 중에 가장 큰 수 : " + sum2);
}