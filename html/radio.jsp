<<<<<<< HEAD
<%@ page language="java" contentType="text/html;
charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>html/radio.jsp</title>
</head>
<body>
    <!-- 자바 표현 -->
    <%
        String userSex = request.getParameter("sex");
        String userYear = request.getParameter("year");
        String[] userFavorite = request.getParameterValues("favorite");
    %>
    <!-- System.out.print("사용자성별:"); 이건 콘솔없어서 사용 못 함 -->
    <h1>사용자성별: <%=userSex%></h1>
    <h1>사용자학년: <%=userYear%></h1>
    <h1>사용자취향: 
    <%
        for(String user : userFavorite) {
    %>
            <%=user%>
        <%    
        }
        %>
    </h1>
</body>
=======
<%@ page language="java" contentType="text/html;
charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>html/radio.jsp</title>
</head>
<body>
    <!-- 자바 표현 -->
    <%
        String userSex = request.getParameter("sex");
        String userYear = request.getParameter("year");
        String[] userFavorite = request.getParameterValues("favorite");
    %>
    <!-- System.out.print("사용자성별:"); 이건 콘솔없어서 사용 못 함 -->
    <h1>사용자성별: <%=userSex%></h1>
    <h1>사용자학년: <%=userYear%></h1>
    <h1>사용자취향: 
    <%
        for(String user : userFavorite) {
    %>
            <%=user%>
        <%    
        }
        %>
    </h1>
</body>
>>>>>>> f9596c0645ce481e4629ed2c7799c6ccc7c104c5
</html>