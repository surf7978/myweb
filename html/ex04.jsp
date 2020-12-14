<%@ page language="java" contentType="text/html;
charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>html/ex04.jsp</title>
</head>
<body>
        <%
        String ID = request.getParameter("id");
        String BIRTH = request.getParameter("birth");
        String SEX = request.getParameter("sex");
        String EMAIL = request.getParameter("email");
        String SUBS = request.getParameter("subs");
        String PH1 = request.getParameter("ph1");
        String PH2 = request.getParameter("ph2");
        String PH3 = request.getParameter("ph3");
        String JOB = request.getParameter("job");
        String PR = request.getParameter("pr");
        String[] FAVORITE = request.getParameterValues("favorite");
    %>
    <h1>아이디 : <%=ID%></h1>
    <h1>생년월일 : <%=BIRTH%></h1>
    <h1>성별 : <%=SEX%></h1>
    <h1>이메일 : <%=EMAIL%></h1>
    <h1>메일수신 : <%=SUBS%></h1>
    <h1>핸드폰 : <%=PH1%>-<%=PH2%>-<%=PH3%></h1>
    <h1>직업 : <%=JOB%></h1>
    <h1>취미 : 
    <%
        for(String fv : FAVORITE) {
    %>
            <%=fv%>
        <%    
        }
        %>
    </h1>
    <h1>직업 : <%=PR%></h1>
</body>
</html>