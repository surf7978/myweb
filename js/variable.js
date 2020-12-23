let something = null;
something = 1 > 2; //이렇게 하면 false값으로 됨
something = 0; //거짓
something = ""; //거짓
something = "ㅁ"; //참

if (something) {
    console.log(something, "참입니다.");
} else {
    console.log(something, "거짓입니다.");
}

something = {
    name: 'Hong', // :으로 해줘야함 =으로하면 안됨
    age: 20,
    phone: '010-1111-2222'
}
let name = something.name;
let age = something['age'];
console.log(something);
console.log(something.name);


for (field in something) {
    console.log(field);
}

for (field in something) {
    console.log(something);
}

for (field in something) {
    console.log(something.field);
}

for (field in something) {
    console.log(field, something.field);
}

for (field in something) {
    console.log(field, field);
}

for (field in something) { //in은 변수 of는 요소를 가져온다
    console.log(field, something[field]);
}

let nameAry = ['Kim', 'Park', 'Hong','Hwang','Lee'];
let name1 = nameAry[0];
let name2 = nameAry[1];
nameAry[2] = 'Choi';

for (let i = 0; i < nameAry.length; i++) {
    console.log('nameAry[' + i + '] : ' + nameAry[i]);
}

for (str of nameAry) { //in은 변수 of는 요소를 가져온다
    console.log(str);
}

document.write('<ul>');
for (str of nameAry) {
    document.write('<li>'+str+'</li>');
}
document.write('</ul>');

document.write('<table border=2px>');
document.write('<tr><td><b><center>순번</center></b></td><td><b><center>이름</center></b></td></tr>');
for (let i=0; i<nameAry.length; i++) {
    document.write('<tr><td><center>'+(i+1)+'</center></td><td><center>'+nameAry[i]+'</center></td></tr>');
}
document.write('</table>');

document.write('<p></p>'); //방법2
let i=1;
document.write('<table border=2px>');
document.write('<tr><td><b><center>순번</center></b></td><td><b><center>이름</center></b></td></tr>');
for (str of nameAry) {
    document.write('<tr><td><center>'+i+++'</center></td><td><center>'+str+'</center></td></tr>');
}
document.write('</table>');

