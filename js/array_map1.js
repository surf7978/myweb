let students = [];
let student = {
    sno : 1,
    sname : 'Hong',
    sgen : 'F',
    score : 80
}

for(let i=1; i<=5; i++){
    let std = {};
    std.sno = i;
    std.sname = 'Hong'+i;
    std.sgen = i % 2 == 0 ? 'M' : 'F';
    std.score = 80+i;
    students.push(std);
}
console.log(students);

//성별이 F인 사람들의 score만 출력하기
let result = students.filter(function (a,b,c) {
    return a.sgen == 'F';  
}).map(function (a,b,c) { //map은 리턴값을 변수에 넣을때 사용한다
   return /*console.log(a.sname+' / '+a.score+'점');*/ a.score;
});
console.log(result);

/*result =*/ students.filter(function (a,b,c) {
    return a.sgen == 'F';  
}).forEach(function (a,b,c) { //forEach는 출력할때 사용한다.
    console.log(a.sname+' / '+a.score+'점');
});
//console.log(result);