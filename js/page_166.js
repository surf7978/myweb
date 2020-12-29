function drawTable() {
    let h2Tag = document.createElement('h2');
    h2Tag.innerHTML='입력 양식 데이터 전송 버튼';
    document.getElementById('show').append(h2Tag);

    let formTag = document.createElement('form');
    formTag.setAttribute('action', 'page.jsp');
    formTag.setAttribute('method', 'get');
    document.getElementById('show').append(formTag);

    let pTag1 = document.createElement('p');
    pTag1.innerHTML='이름 : ';
    formTag.append(pTag1);

    let pTag2 = document.createElement('p');
    pTag2.innerHTML='학과 : ';
    formTag.append(pTag2);

    let pTag3 = document.createElement('p');
    formTag.append(pTag3);

    let inputTag1 = document.createElement('input');
    inputTag1.setAttribute('type', 'text');
    inputTag1.setAttribute('name', 'name');
    pTag1.append(inputTag1);

    let inputTag2 = document.createElement('input');
    inputTag2.setAttribute('type', 'text');
    inputTag2.setAttribute('name', 'major');
    pTag2.append(inputTag2);

    let inputTag3 = document.createElement('input');
    inputTag3.setAttribute('type', 'submit');
    inputTag3.setAttribute('value', '전송');
    formTag.append(inputTag3);
}