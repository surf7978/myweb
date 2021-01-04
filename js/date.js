let today = new Date(); //today=현재시각
console.log(today.getFullYear()); //get + (Month = 0~11 / Date = 1~31 / Hours = 0~23 / Minutes,Seconds = 0~59 / time = 1970년1월1일부터 오늘날짜에 해당되는 시간 밀리세컨드로표현 Day = 0~6(일월화수목금토))
console.log(today.getTime());
console.log(today.getDay());

//값을 줄 때는 set
today.setFullYear(2019);
today.setMonth(0);
console.log(today);
console.log(today.getDay());

today = new Date('2020-11-11'); //GMT기준으로 현재위치 타임존을 반영함 우리나라의 경우 +09:00:00 되서 나옴
console.log(today);

console.clear();
function setCal(yyyy, mm, dd) {
    let today = new Date(yyyy+'-'+mm+'-'+dd);
    today = new Date(yyyy, mm, 1); //이렇게 하면 7월 1일임 + 만약 0 넣으면 6월 30일을 가져옴
    console.log(today.getDate());
}
setCal('2020','06','05');

//내가 원하는 날짜의 달력 출력되게 만들기
function showCal() {
    let clearCal = document.getElementById('show');
    clearCal.innerHTML = ' ';

    let yyyy = document.getElementById('year').value;
    let mm = document.getElementById('month').value;
    let dd = new Date(yyyy, mm, 0); //입력한 년월의 마지막날
    console.log(dd.getDate()+4);
    if(mm > 12 || mm < 1){
        alert('정확한 날짜를 입력하세요');
    }else{
        let days = ['Sun','Mon','Tue','Wed','Thr','Fri','Sat'];
        let dates = [];
        for(let i=1; i<=42; i++){
            //1일이 시작되는 요일
            let today = new Date(yyyy, mm-1, 1);
            let k = today.getDay();
            let j = i-k;
            //console.log("j"+j)
            if(j > 0 && j < (dd.getDate()+1)){
                dates.push(j);
            }else{
                dates.push(' ');
                }
            }
            let insertYnM = document.createElement('tr');
            insertYnM.setAttribute('style', 'font-size: 40px; ;')
            insertYnM.innerHTML = '<'+yyyy+'년'+mm+'월>';
            document.getElementById('show').append(insertYnM)
            let tableTag = document.createElement('table');
            tableTag.setAttribute('border','2px');
            tableTag.setAttribute('style','text-align:center');
            tableTag.setAttribute('id','tbl');
            let trTag = document.createElement('tr');
            days.forEach(createHeader);     
            dates.forEach(createData);       
            document.getElementById('show').append(tableTag);
        
            function createHeader(a,b,c){
                let thTag = document.createElement('th');
                thTag.setAttribute('style','background-color: gray; color: white;');
                thTag.innerHTML = a;
                trTag.append(thTag);
                tableTag.append(trTag);
            }
        
            function createData(a,b,c){
                let tdTag = document.createElement('td');
                tdTag.innerHTML = a;
                if(b%7==0){
                    trTag = document.createElement('tr');
                    tdTag.setAttribute('style','color:red');
                    trTag.append(tdTag);
                }
                if(b%7==6){
                    tdTag.setAttribute('style','color:blue');
                }
                if(a==0){
                    tdTag.setAttribute('style','background-color:silver');
                }
                trTag.append(tdTag);
                tableTag.append(trTag);
            }
    }
}
