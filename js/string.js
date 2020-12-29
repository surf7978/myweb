let str = 'Please locate where "locate" occurs!';
let strLeng = str.length; //문장 길이

console.log(strLeng);

//indecOf, lastIndecOf, search
strLeng = str.indexOf('locates'); //이 글자가 앞에서 몇번째 위치에 있는지 가르쳐줌 +없으면 -1 출력함
console.log(strLeng);

console.log(str.lastIndexOf('locate'));  //이 글자가 뒤에서 몇번째 위치에 있는지 가르쳐줌 +없으면 -1 출력함

console.log(str.search('locate'));

strLeng = str.indexOf('locate',13); //앞에서 13번째 이후 locate 위치 
console.log(strLeng);

//slice, substring, substr
let fruit = 'Apple, Banana, Kiwi';
let result = fruit.slice(0, 5); //0(=1번째)부터 5(=6번째)까지 값 출력
console.log(result);

let from = fruit.indexOf('Banana'); //=8
result = fruit.substring(from, from+6); //=(8,8+6)
console.log(result);

result = fruit.substr(from, 6); //같은말
console.log(result);

//replace
console.clear();
let newFruit = fruit.replace('Banana', 'Orange'); //'Banana'를 'Orange'로 변경
console.log(newFruit);

//toUpperCase, toLowerCase 대소문자변경, concat두 문자열 연결, trim 좌우여백 자름, padStart, padEnd여백 추가
console.log('good      home       '.trim().toUpperCase());
console.log('5'.padStart(4,'0')); //4자리 중 한자리 5를 적고 남은자리 0으로 채움

let uri = 'http://www.naver.net';
console.log(uri.replace('net', 'com'));
console.log(uri.replace(uri.substring(uri.lastIndexOf('.')),'.com')); //.위치부터 .com으로 교체

let fruits = fruit.split(','); //Apple, Banana, Kiwi에서 쉼표기준 값을 자르고 배열로 만들어줌
for(f of fruits){
    console.log(f.trim()); //공란 잘라주면, Banana, Kiwi 띄어쓰기 안함
}

// 990101-1234567
// 990102-2345678
// 000201-3456789
// 000202-4567890
// 2000년 이전, 이후 구분 -> 1,3이면 남자 2,4면 여자

function getGender(num){
    if(num.slice(-7,-6) == 1 || num.slice(-7,-6) == 3){
        return '남자';
    }else if(num.slice(-7,-6) == 2 || num.slice(-7,-6) == 4){
        return '여자';
    }
}

let numbers = '990101-3234567';
numbers += ' 990102-2345678';
numbers += ' 000201-3456789';
numbers += ' 000202-4567890';
numbers += ' 0003014567890';

let numAry = numbers.split(' ');
for(num of numAry){
    result = getGender(num);
    console.log(result);
}