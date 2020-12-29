let fruits = ['Apple', 'Banana']; 
fruits[2] = 'Melon'; //자바랑 달리 자바스크립트는 크기 계속 늘릴 수 있음
fruits[fruits.length] = 'Orange'; //이렇게 하면 굳이 []위치 안정해줘도 됨
fruits[fruits.length] = 'Mango';
fruits[2] = 'new Melon';
delete fruits[2];

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

console.clear();

fruits = [];
fruits.push('Apple'); //맨 뒤에 요소 추가됨
fruits.push('Banana'); 
fruits.unshift('Orange'); //맨 앞에 요소 추가
fruits.unshift('Melon');

// fruits.pop(); //맨 뒤에 요소 제거
// fruits.shift(); //맨 앞에 요소 제거

let fruit = fruits.splice(1, 2, 'new Orange', 'new Apple'); //2번째 위치부터 2개 삭제 후, 'new Orange'추가(위치는 2번째 위치 앞), 'new Apple'추가(위치는 'new Orange'뒤)
console.log(fruit); //이걸 변수선언해서 새로운 배열로 만들 수 있음

for(fruit of fruits){
    console.log(fruit);
}

console.clear();

fruits = ['Apple', 'Banana', 'Mango'];
fruit = {
    name:'Apple',
    price:2000,
    weight:50
}

friut['name']; //name based(=fruit.name;)
fruits[0]; // index based