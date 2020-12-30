let students = [];
for(let i=1; i<=5; i++){
    let std = {};
    std.sno = i;
    std.sname = 'Hong'+i;
    std.sgen = i % 2 == 0 ? 'M' : 'F';
    std.score = 80+i;
    students.push(std);
}

let result = students.reduce(function (a,b,c,d) { //a=초기값과 비교해서 나온 리턴값(=누적값) b=item c=index d=ary
    console.log('a값',a,'/ b값',b,'/ c값',c,'/ d값',d)
    return a.score > b.score ? a.score : b.score; //리턴값으로 다음 차수의 초기값으로 지정됨
},0); //reduce의 초기값을 0으로 지정함
console.log(result);

console.clear();

result = students.map(function (a,b,c) { 
    return a.score;
}).reduce(function (a,b,c,d) {
    console.log(a,b);
    /*return a += b;*/
    return a < b ? a : b;
}); 
console.log('결과 : '+result);

result = students.every(function (a,b,c) { //밑의 조건을 다 만족하면 true 하나라도 아니면 false
    /*return a.score > 80; */
    return a.score > 83;
});
console.log(result);

result = students.some(function (a,b,c) { //밑의 조건을 하나라도 만족하면 true 전부 아니면 false
    return a.score > 86; 
    /*return a.score > 83;*/
});
console.log(result);

result = students.map(function (a,b,c) { 
    return a.sname; 
}).indexOf('Hong1'); //indexOf =찾고자하는 요소가 이게 몇번째 문자열에 있는가
//지금 여기서는 Hong1이 0번째 배열에 있으니까 0으로 나옴 / 없으면 -1로 나옴
console.log(result);