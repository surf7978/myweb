//타이틀영역
var tableTag = document.getElementById('name&age');

var trTag1 = document.createElement('tr'); //<tr></tr>

var tdTag1 = document.createElement('td'); //<td></td>
tdTag1.innerHTML = 'Name';
tdTag1.setAttribute('id','first'); //td태그에 id="first" 넣음
tdTag1.setAttribute("class", "title");
var tdTag2 = document.createElement('td');
tdTag2.innerHTML = 'Age';
tdTag2.setAttribute("class", "title");

trTag1.append(tdTag1);//tdTag1을 trTag1에 종속시킴
trTag1.append(tdTag2);

console.log(trTag1);//콘솔확인용 출력문

tableTag.append(trTag1);

// data영역
var trTag2 = document.createElement('tr');
var tdTag3 = document.createElement('td');
tdTag3.setAttribute("class", "data");
tdTag3.innerHTML = 'Hong';
var tdTag4 = document.createElement('td');
tdTag4.setAttribute("class", "data");
tdTag4.innerHTML = '15';
trTag2.append(tdTag3);
trTag2.append(tdTag4);
tableTag.append(trTag2);

console.log(trTag2);
