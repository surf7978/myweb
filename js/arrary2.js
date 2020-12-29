let fruits = [];

function sum(){
    console.clear();
    fruits.push(document.getElementById('fruit').value);
    for(fruit of fruits){
        console.log(fruit);
    }
}
function minus(){
    console.clear();
    //입력한 것과 같은거 삭제하기
    for(let i=0; i<fruits.length; i++){
        console.log(document.getElementById('fruit').value)
        // if(document.getElementById('fruit').value=fruits[i]){
        //     fruits.splice(i,1);
        // }
    }
    // fruits.pop();
    for(fruit of fruits){
        console.log(fruit);
    }
}

function draw(){
    let show = document.getElementById('show');
    show;

    let ulTag = document.createElement('ul');
    for(fruit of fruits){

    }
}