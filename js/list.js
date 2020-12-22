document.write("<ul><li>Apple</li><li>Banana</li></ul>")

for (let i = 1; i <= 10; i++) {
    document.write('<p>i의 값은 : <b>' + i + '</b> 입니다.</p>');
}

var dan = 4;
document.write('<ul>');
for (let i = 1; i <= 10; i++) {
    document.write('<li style="background: yellow">' + dan + '*' + i + "=<b>" + (
        dan * i
    ) + '</b></li>');
}
document.write('</ul>'); //안해줘도 오류는 자동으로 잡아주지만 원래대로라면 적어줘야함

document.write('<ul>');
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 1) {

        document.write('<li class="even">' + dan + '*' + i + "=<b>" + (
            dan * i
        ) + '</b></li>');
    } else {
        document.write('<li class="odd">' + dan + '*' + i + "=<b>" + (
            dan * i
        ) + '</b></li>');
    }
}
document.write('</ul>');

function myFunc() {
    document.write('<ul>');
    for (let i = 1; i <= 10; i++) {
        if (i % 2 == 1) {

            document.write('<li class="even">' + dan + '*' + i + "=<b>" + (
                dan * i
            ) + '</b></li>');
        } else {
            document.write('<li class="odd">' + dan + '*' + i + "=<b>" + (
                dan * i
            ) + '</b></li>');
        }
    }
    document.write('</ul>');
}

function myFuncTB() {
    document.write('<table>');
    for (let i = 1; i <= 10; i++) {
        document.write('<tr>');
        if (i % 2 == 1) {

            document.write('<td class="even">' + dan + '*' + i + "=<b>" + (
                dan * i
            ) + '</b></td>');
        } else {
            document.write('<td class="odd">' + dan + '*' + i + "=<b>" + (
                dan * i
            ) + '</b></td>');
        }
        document.write('</tr>');
    }
    document.write('</table>');
}

var a = document.getElementById('show'); 
console.log(a);
a.innerHTML="OK";