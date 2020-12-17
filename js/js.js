   var name = document.getElementById('show').innerHTML;
        // id가 show 인 html 내용 출력
        console.log(name);
        //F12눌러서 콘솔확인
        document.getElementById('show').innerHTML = "World";

        var divTag = document.createElement("div");
        //divTag에 <div></div>요소를 넣음
        divTag.innerHTML="Nice";
        //Nice 문구 넣음
        document.getElementById('show').after(divTag);
        //divTag안에 내용으로 들어감
        document.getElementById('show').append(divTag);
        //하위 자식으로 붙어서 들어감

        var li_1 = document.createElement("li");
        var li_2 = document.createElement("li");
        li_1.innerHTML="Apple";
        li_2.innerHTML="Orange";
        document.getElementById("fruit").append(li_1);
        document.getElementById("fruit").append(li_2);
        // document.getElementById("fruit").after(li_2);
        // document.getElementById("fruit").after(li_1);

        var tr = document.createElement("tr");
        //tr.innerHTML="asd";
        var td1= document.createElement("td");
        td1.innerHTML="Name";
        var td2= document.createElement("td");
        td2.innerHTML="Age";
        var td3= document.createElement("td");
        td3.innerHTML="Hong";
        var td4= document.createElement("td");
        td4.innerHTML="15";
        document.getElementById("name&age").append(tr);
        document.getElementById("name&age").append(td1);
        document.getElementById("name&age").append(td2);
        document.getElementById("name&age").append(tr);
        document.getElementById("name&age").append(td3);
        document.getElementById("name&age").append(td4);
        //document.getElementById("name&age").append(tr);

        //console.log(tr);
        // 콘솔확인용출력 명령어
        

        var grade = 4;
        for(var i = 1; i<=9; i++){
            var str = grade+'*'+i+'='+(grade*i);
            console.log(str);
        }
