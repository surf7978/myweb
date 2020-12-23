let numbers = [83,4,9,91,80,16,22];
let sum =0;
for(num of numbers){
    if(num % 2 == 0){
        sum += num;
    }
}
console.log("합계 : "+sum);
console.log("합계 : ",sum);

sum = 0;
for(let i=0; i<numbers.length; i++){
    if(numbers[i] > sum){
        sum = numbers[i];
    } 
}
console.log("numbers의 가장 큰 수 : "+sum);

sum = 0;
for(num of numbers){
    if(num > sum){
        sum = num;
    } 
}
console.log("numbers의 가장 큰 수 : "+sum);

let friend1 = {
    name : '김',
    age : 10,
    hobby : '자바',
    grade : 'A',
    money : 500,
    handicap : 'eyes' 
}
let friend2 = {
    name : '이',
    age : 20,
    hobby : '오라클' ,
    grade : 'B',
    money : 1500,
    handicap : 'arms'  
}
let friend3 = {
    name : '박',
    age : 30,
    hobby : 'HTML',
    grade : 'C',
    money : 9500,
    handicap : 'legs'
}

let friends = [friend1, friend2, friend3];

document.write("<table border=2px><tr><td><center><b>이름</b></center></td><td><center><b>나이</b></center></td><td><center><b>취미</b></center></td></tr>");
for(str of friends){
    document.write("<tr><td><center>"+str.name+"</center></td><td><center>"+str.age+"</center></td><td><center>"+str.hobby+"</center></td></tr>");
}
document.write("</table>");

document.write("<p></p>");
//항목 추가될 경우 자동으로 행렬추가 되게 코딩
document.write("<table border=2px style='text-align: center;'><tr>");
for(field in friend1){
    document.write('<th>'+field+'</th>'); //th쓰면 굵은 글씨됨
}
document.write("</tr>");
for(friend of friends){
    document.write("<tr>");
    for(field in friend){
        document.write('<td>'+friend[field]+'</td>');
    }
    document.write("</tr>");
}
document.write("</table>");
