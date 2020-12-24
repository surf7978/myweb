let ulTag = document.createElement('ul');
ulTag.innerHTML = 'Apple';

let liTag = document.createElement('li');
liTag.innerHTML = 'Banana';
let liTag1 = document.createElement('li');
liTag1.innerHTML = 'Orange';


ulTag.append(liTag);
ulTag.append(liTag1);

document.getElementById('show1').append(ulTag);

console.log(ulTag);

function input_fruit(){
    //내가한거1
    let liTag2 = document.createElement('li');
    liTag2.innerHTML = fruit.value;
    document.getElementById('show1').value = ulTag.append(liTag2);
    
    //내가한거2
    //document.getElementById('show1').value = ulTag.append(fruit.value);

    //정답
    // ulTag.id = 'fruit1';
    // let fruit = document.getElementById('fruit').value;
    // let liTag6 = document.createElement('li');
    // liTag6.innerHTML = fruit;
    // console.log(liTag6);
    // document.getElementById('fruit1').append(liTag6);
}