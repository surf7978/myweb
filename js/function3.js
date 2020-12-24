let friends4 = [];
let i1 = 0;
function input_friend1() {
    let namef = document.getElementById('name10').value;
    let agef = document.getElementById('age10').value;
    let hobbyf = document.getElementById('hobby10').value;
    
    let friend5 = {};
    friend5.name10 = namef;
    friend5.age10 = agef;
    friend5.hobby10 = hobbyf;

    friends4[i1++] = friend5;
    //console.clear();

    for(friend5 of friends4){
        for(field in friend5){
            console.log(friend5[field]);
        }
    }
    //입력 버튼 누르면 테이블에 추가 되게 만들기
    //내가한것
    let trFDS = document.createElement('tr');
    let tdName = document.createElement('td');
    tdName.innerHTML = friend5.name10;
    trFDS.append(tdName);
    let tdAge = document.createElement('td');
    tdAge.innerHTML = friend5.age10;
    trFDS.append(tdAge);
    let tdHobby = document.createElement('td');
    tdHobby.innerHTML = friend5.hobby10;
    trFDS.append(tdHobby);
    document.getElementById('friends10').value = friends10.append(trFDS);

    //정답
    
}

function insertPerson(name, age){
    let friends3 = [];
    for(let i=0; i<3;  i++){
    let name = window.prompt('이름을 입력하세요.');
     let age  = window.prompt('나이를 입력하세요.');
     let friend9 = {};
     friend9.name = name;
     friend9.age = age;
     friends3[i] =friend9;
    }
    document.write('<table border= "1">')
     for(friend9 of friends3){
        document.write('<tr>')
        for(field in friend9){
            document.write('<td>' + friend9[field] + '</td>')
        }
        document.write('</tr>')
    }
    document.write('</table border>')
}

let friend5 = { };
friend5.name = 'Hong';
friend5.age = 20;

let friend6 = { };
friend6.name = 'Park';
friend6.age = 30;
friend6.hobby = 'reading';

let friend7 = { };
friend7.name = 'Choi';
friend7.age = 40;

let friends1 = [];
friends1[0]=friend5;
friends1[1]=friend6;
friends1[2]=friend7;

document.write("<table border=2px><tr><td><center><b>이름</b></center></td><td><center><b>나이</b></center></td><td><center><b>취미</b></center></td></tr>");
for(str of friends1){
    document.write("<tr><td><center>"+str.name+"</center></td><td><center>"+str.age+"</center></td><td><center>"+str.hobby+"</center></td></tr>");
}
document.write("</table>");

document.write("<p></p>");
document.write("<table border=2px style='text-align: center;'><tr>");
for(field in friend5){
    document.write('<th>'+field+'</th>');
}
document.write("</tr>");
for(friend of friends1){
    document.write("<tr>");
    for(field in friend){
        document.write('<td>'+friend[field]+'</td>');
    }
    document.write("</tr>");
}
document.write("</table>");

function input_friend() {
    let namef = document.getElementById('name10');
    let agef = document.getElementById('age10');
    let hobbyf = document.getElementById('hobby10');
    console.log(namef.value, agef.value, hobbyf.value);
    document.getElementById("show1").innerHTML = namef.value+','+agef.value+','+hobbyf.value;
    document.getElementById("result").value = namef.value+','+agef.value+','+hobbyf.value;
}