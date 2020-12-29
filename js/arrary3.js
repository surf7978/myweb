let numbers = [34, 55, 22, 10, 100, 6, 7];
//numbers.sort(); //원하는대로 내림차순 안됨

numbers.sort(function(a,b){
    // if(a>b){
    //     return 1;
    // } else {
    //     return -1;
    // } //이렇게하면 오름차순 정렬

    // return a-b; //오름차순 정렬

    return b-a; //내림차순 정렬
});
console.log(numbers);

console.clear();

let ulTag = document.createElement('ul');
document.getElementById('show').append(ulTag);
let sum = 0;
numbers.forEach(function(a, b, c){ //a=배열요소=item b=인덱스값=idx c=배열자체=ary
    sum += a;
    console.log(a, b);
    let liTag = document.createElement('li');
    liTag.innerHTML = a;
    ulTag.append(liTag);
});
let liTag = document.createElement('li');
liTag.innerHTML = '합계 : '+sum;
ulTag.append(liTag);