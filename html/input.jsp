<<<<<<< HEAD
<<<<<<< HEAD
<%@ page language="java" contentType="text/html;
charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>html/input.jsp</title>
</head>
<body>
    <!-- 자바 표현 -->
    <%
        String userName = request.getParameter("user_name");
        String userId = request.getParameter("user_id");
        String userPw = request.getParameter("user_pw");
    %>
    <h1>사용자명: <%=userName%></h1>
    <h1>아이디: <%=userId%></h1>
    <h1>비번: <%=userPw%></h1>
</body>
=======
<%@ page language="java" contentType="text/html;
charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>html/input.jsp</title>
</head>
<body>
    <!-- 자바 표현 -->
    <%
        String userName = request.getParameter("user_name");
        String userId = request.getParameter("user_id");
        String userPw = request.getParameter("user_pw");
    %>
    <h1>사용자명: <%=userName%></h1>
    <h1>아이디: <%=userId%></h1>
    <h1>비번: <%=userPw%></h1>
</body>
>>>>>>> cbdd82e (12.14)
=======
<%@ page language="java" contentType="text/html;
charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>html/input.jsp</title>
</head>
<body>
    <!-- 자바 표현 -->
    <%
        String userName = request.getParameter("user_name");
        String userId = request.getParameter("user_id");
        String userPw = request.getParameter("user_pw");
    %>
    <h1>사용자명: <%=userName%></h1>
    <h1>아이디: <%=userId%></h1>
    <h1>비번: <%=userPw%></h1>
</body>
>>>>>>> f9596c0645ce481e4629ed2c7799c6ccc7c104c5
</html>