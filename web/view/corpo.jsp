<%
    if(request.getSession().getAttribute("usuario") !=null){
        
        String nivel = (String) request.getSession().getAttribute("usuario");
        
        if(nivel.equals("1")){
%>
<!-- Area da Barra no TOPO -->
            <%@include file="/view/auxiliares/navbar-principal.jsp" %>
            
            <!-- Area Central -->
            <%@include file="/view/telas/AreaCoordenador.jsp" %>
            
            <!-- Area do Rodapé -->
            <%@include file="/view/auxiliares/footer.jsp" %>
<%
        } else if(nivel.equals("2")){
%>
<!-- Area da Barra no TOPO -->
            <%@include file="/view/auxiliares/navbar-principal.jsp" %>
            
            <!-- Area Central -->
            <%@include file="/view/telas/AreaProfessor.jsp" %>
            
            <!-- Area do Rodapé -->
            <%@include file="/view/auxiliares/footer.jsp" %>
<%      }
    } else{
%>
<!-- Area da Barra no TOPO -->
            <%@include file="/view/auxiliares/navbar-inicio.jsp" %>

            <!-- Area Central -->
            <%@include file="/view/telas/login-inicio.jsp" %>
            
            <!-- Area do Rodapé -->
            <%@include file="/view/auxiliares/footer.jsp" %>
<%
    }
%>
