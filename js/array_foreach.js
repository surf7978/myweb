let persons = ['Hong', 'Hwang', 'Park', 'Choi'];

let ulTag = document.createElement('ul');
document.getElementById('show').append(ulTag);
persons.forEach(myCallBack);

function myCallBack(a,b,c){
    let liTag = document.createElement('li');
    liTag.innerHTML = a;
    ulTag.append(liTag);
}

persons = [];
let person = {
    name : '이혜빈',
    age : 20,
    score : 90
}

persons.push(person);

let person1 = {};
person1.name = '이나경';
person1.age = 21;
person1.score = 80;
persons.push(person1);

//persons.push('송다희'); //이렇게 하면 ojt 타입이 아니라 string타입으로 들어감

console.log(persons);

//테이블에, row, column >> persons의 배열요소
//document.createElement('table');
//부모요소.append(자식요소);
//#show에 append;
// persons.forEach();
function drawTable(){

    //정답1 이건 write라서 새 페이지에서 열림
    // document.write("<table border=2px><tr><td><center><b>이름</b></center></td><td><center><b>나이</b></center></td><td><center><b>점수</b></center></td></tr>");
    // for(str of persons){
    //   document.write("<tr><td><center>"+str.name+"</center></td><td><center>"+str.age+"</center></td><td><center>"+str.score+"</center></td></tr>");
    // }
    // document.write("</table>");

    //정답2 이건 write라서 새 페이지에서 열림2
//     document.write("<table border=2px style='text-align: center;'><tr>");
//     for(str in person1){
//        document.write('<th>'+str+'</th>');
//     }
//     document.write("</tr>");
//     for(person of persons){
//       document.write("<tr>");
//       for(prs in person){
//          document.write('<td>'+person[prs]+'</td>');
//      }
//     document.write("</tr>");
//     }
//    document.write("</table>");    

   //정답3 왜 안되지?
    // let tableTag = document.createElement('table');
    // document.getElementById('show').append(tableTag);
    // for(str in person1){
    //     let thTag = document.createElement('th');
    //     thTag.innerHTML = str;
    //     tableTag.append(thTag);
    // }
    // for(person of persons){
    //   let trTag = document.createElement('tr');
    //   tableTag.append(trTag);
    //   for(prs in person){
    //     let tdTag = document.createElement('td');
    //     persons.forEach(function(a,b,c){ //여기 왜 person이 안되는지 알아내기 = foreach의 a가 오브젝트니까 foreach안에 for구문 돌려야함
    //         tdTag.innerHTML = a;
    //     });
    //     trTag.append(tdTag);
    //  }
    // }

    //교수님꺼
    // let titles = ['이름', '나이', '점수'];

    // let tableTag = document.createElement('table');
    // tableTag.setAttribute('border','1');

    // let trTag = document.createElement('tr');
    // for(title of titles){
    //   let tdTag = document.createElement('td');
    //   tdTag.innerHTML = title;
    //   trTag.append(tdTag);
    // }
    // tableTag.append(trTag);

    // persons.forEach(function(a,b,c){
    //   let trTag = document.createElement('tr');
    //   for(field in a){
    //     let tdTag = document.createElement('td');
    //     tdTag.innerHTML = a[field];
    //     trTag.append(tdTag);
    //   }
    //   tableTag.append(trTag);
    // });

    // document.getElementById('show').append(tableTag);

    //내가 개선한것
    tableTag = document.createElement('table');
    tableTag.setAttribute('border','2');
    document.getElementById('show').append(tableTag);
    for(str in person1){
        let thTag = document.createElement('th');
        thTag.innerHTML = str;
        tableTag.append(thTag);
    }
    // persons.forEach(function(a,b,c){
    //     let trTag = document.createElement('tr');
    //     for(field in a){
    //       let tdTag = document.createElement('td');
    //       tdTag.innerHTML = a[field];
    //       trTag.append(tdTag);
    //     }
    //     tableTag.append(trTag);
    //   }); //밑에 myCallFunc로 따로 뺌
    persons.forEach(myCallFunc);
}

let tableTag = document.createElement('table');
tableTag.setAttribute('border','2');
function myCallFunc(a, b, c){
    let trTag = document.createElement('tr');
        for(field in a){
          let tdTag = document.createElement('td');
          tdTag.innerHTML = a[field];
          trTag.append(tdTag);
        }
        tableTag.append(trTag);
}