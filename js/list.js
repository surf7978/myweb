document.write("<ul><li>Apple</li><li>Banana</li></ul>");

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
    document.write(
        "<style> .even{background-color: yellow;} .odd{background-color: red;}</style>"
    );
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
    document.write('<button onclick="back()">return</button>');
}

function myFuncTB() {
    document.write(
        "<style> .even{background-color: yellow;} .odd{background-color: red;}</style>"
    );
    document.write('<table border=1px>');
    for (let i = 1; i < 10; i++) {
        if (i % 2 == 1) {
            document.write('<tr>');
            document.write(
                '<td class="even"><center>' + dan + ' * ' + i + '</center></td>'
            );
            document.write('<td class="even"><center>=<center></td>');
            document.write("<td class='even'><b><center>" + (
                dan * i
            ) + '</center></b></td>');
            document.write('</tr>');
        } else {
            document.write('<tr>');
            document.write(
                '<td class="odd"><center>' + dan + ' * ' + i + '</center></td>'
            );
            document.write('<td class="odd"><center>=<center></td>');
            document.write("<td class='odd'><b><center>" + (
                dan * i
            ) + '</center></b></td>');
            document.write('</tr>');
        }
    }
    document.write('</table>');
    document.write('<button onclick="back()">return</button>'); //일단 톰캣으로 하면 되긴되는데 흠... 제대로 안됨
}

function back() {
    // history.go(-1); document.write("<a
    // src='https://localhost/web/main.html'></a>");
    window
        .location
        .reload();
}

var a = document.getElementById('show');
console.log(a);
a.innerHTML = "OK";