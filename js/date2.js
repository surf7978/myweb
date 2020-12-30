//date.js

// let today = new Date(yyyy+'-'+mm+'-'+dd); //여기선 mm이 11월로 나오지만
// console.log(today);

// today=new Date(yyyy,mm,dd); //여기선 0~11 이므로 12월로 나옴
// console.log(today);

function setYM(){
   let a= document.getElementById("cal");
   console.log(a.value);
   let yyyy= String(a.value).split('-')[0];
   let mm = String(a.value).split('-')[1]
   setCal(yyyy,mm);
}


function setCal(yyyy,mm){

let today = new Date(yyyy + '-' + mm);
let start = (today.getDay(yyyy, mm - 1));


function createDate(a, b, c) {
    d1 = document.createElement('td');
    d1.innerHTML = a;
    r1.append(d1);
    if(start ==0){start=7};
    if (a % 7 == 7-start) {
        t1.append(r1);
        r1 = document.createElement('tr');
    }
}


let s1 = document.getElementById('show');
// s1.innerHTML = '';
s1.innerHTML = '<h1>'+yyyy+'년'+mm+'월</h1>';
let t1 = document.createElement('table');

let r1 = document.createElement('tr');

let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
for (let day of days) {
    let d1 = document.createElement('td');

    d1.innerHTML = day;
    r1.append(d1);
}
t1.append(r1);

let dates = [];

let dal = 31;
if (mm==2){
    if (yyyy%4==0){
        dal=29;
    } else dal= 28;
}
else if (mm <=6){
if (mm%2 ==0){
    dal= 30;
}
}
else if (mm >=8){
    if (mm%2==1){
        dal=30;
    }
}

for (let i = 1; i <= dal; i++) {
    dates.push(i); //unshift 역순

}

r1 = document.createElement('tr');
for (let i = 1; i <= start; i++) {
    d1 = document.createElement('td');
    r1.append(d1);
}


dates.forEach(createDate);

t1.append(r1);
t1.setAttribute('style', 'text-align:center; border:1px solid; font-size:40px;');
s1.append(t1);




}