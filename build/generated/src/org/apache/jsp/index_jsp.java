package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class index_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List<String> _jspx_dependants;

  static {
    _jspx_dependants = new java.util.ArrayList<String>(8);
    _jspx_dependants.add("/view/auxiliares/head.jsp");
    _jspx_dependants.add("/view/corpo.jsp");
    _jspx_dependants.add("/view/auxiliares/navbar-principal.jsp");
    _jspx_dependants.add("/view/telas/AreaCoordenador.jsp");
    _jspx_dependants.add("/view/auxiliares/footer.jsp");
    _jspx_dependants.add("/view/telas/AreaProfessor.jsp");
    _jspx_dependants.add("/view/auxiliares/navbar-inicio.jsp");
    _jspx_dependants.add("/view/telas/login-inicio.jsp");
  }

  private org.glassfish.jsp.api.ResourceInjector _jspx_resourceInjector;

  public java.util.List<String> getDependants() {
    return _jspx_dependants;
  }

  public void _jspService(HttpServletRequest request, HttpServletResponse response)
        throws java.io.IOException, ServletException {

    PageContext pageContext = null;
    HttpSession session = null;
    ServletContext application = null;
    ServletConfig config = null;
    JspWriter out = null;
    Object page = this;
    JspWriter _jspx_out = null;
    PageContext _jspx_page_context = null;

    try {
      response.setContentType("text/html;charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;
      _jspx_resourceInjector = (org.glassfish.jsp.api.ResourceInjector) application.getAttribute("com.sun.appserv.jsp.resource.injector");

      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("<!DOCTYPE html>\n");
      out.write("<html>\n");
      out.write("    <head>\n");
      out.write("        ");
      out.write("<!-- Inicio do Head -->\n");
      out.write("        <meta charset=\"utf-8\"/>\n");
      out.write("        <meta name=\"robots\" content=\"ALL\" />\n");
      out.write("        <title>IFBA - PIT E RIT</title>\n");
      out.write("        <link href=\"../asset/img/favicon-oficial.ico\" rel=\"icon\" type=\"image/x-icon\" />\n");
      out.write("\n");
      out.write("        <!-- Chamada do Bootstrap CSS -->\n");
      out.write("        <link rel=\"stylesheet\" href=\"/asset/css/bootstrap.css\">\n");
      out.write("\n");
      out.write("        <!-- Chamada do CSS de personalização // Sempre usar abaixo da chamada do CSS principal-->\n");
      out.write("        <link rel=\"stylesheet\" href=\"css/extra.css\">\n");
      out.write("        \n");
      out.write("        <!-- Chamada para o JQUERY -->\n");
      out.write("        <script src=\"../asset/js/jquery-1.11.3.js\"></script>\n");
      out.write("\n");
      out.write("        <!-- Chamada do JavaScript do Bootstrap -->\n");
      out.write("        <script src=\"../asset/js/bootstrap.js\"></script>\n");
      out.write("\n");
      out.write("        <!-- Chamada do JavaScript do TinyMCE -->\n");
      out.write("        <script src=\"../asset/js/tinymce/tinymce.min.js\" type=\"text/javascript\"></script>\n");
      out.write("        <script src=\"../asset/js/tinymce/tinymce_config.js\" type=\"text/javascript\"></script>\n");
      out.write("\n");
      out.write("        <!-- Chamada dos Scripts das datas -->\n");
      out.write("        <link href=\"../asset/js/datepicker/css/bootstrap-datetimepicker.css\" rel=\"stylesheet\" type=\"text/css\"/>\n");
      out.write("        <script src=\"../asset/js/datepicker/moment-with-locales.js\" type=\"text/javascript\"></script>\n");
      out.write("        <script src=\"../asset/js/datepicker/js/bootstrap-datetimepicker.js\" type=\"text/javascript\"></script>\n");
      out.write("        <!--        <script src=\"js/datepicker/bootstrap-datetimepicker-config.js\" type=\"text/javascript\"></script>-->\n");
      out.write("\n");
      out.write("        <!-- Chamada dos Scripts do file Input -->\n");
      out.write("        <link href=\"../asset/js/file-input/css/fileinput.css\" rel=\"stylesheet\" type=\"text/css\"/>\n");
      out.write("        <script src=\"../asset/js/file-input/js/fileinput.js\" type=\"text/javascript\"></script>\n");
      out.write("        <script src=\"asset/js/file-input/js/fileinput_locale_pt-BR.js\" type=\"text/javascript\"></script>\n");
      out.write("        \n");
      out.write("        <!-- Fim do Head -->");
      out.write("\n");
      out.write("    </head>\n");
      out.write("    <body>\n");
      out.write("        <!-- Conteúdo do Aplicativo -->\n");
      out.write("        <div class=\"container-fluid\" >\n");
      out.write("            ");

    if(request.getSession().getAttribute("usuario") !=null){
        
        String nivel = (String) request.getSession().getAttribute("usuario");
        
        if(nivel.equals("1")){

      out.write("\n");
      out.write("<!-- Area da Barra no TOPO -->\n");
      out.write("            ");
      out.write("<!-- NAVBAR PRINCIPAL -->\n");
      out.write("<div class=\"row\">\n");
      out.write("    <nav class=\"navbar navbar-default\">\n");
      out.write("\n");
      out.write("        <!-- LOGO do projeto -->\n");
      out.write("        <div class=\"col-md-offset-1 col-md-2\">\n");
      out.write("            <a href=\"#\"><img src=\"img/Logo - IFBA.png\" class=\"logo-principal\" alt=\"Logo do IFBA\"/></a>\n");
      out.write("        </div>\n");
      out.write("\n");
      out.write("        <!-- NOME do projeto -->\n");
      out.write("        <div class=\"col-md-6 navbar-nome-projeto\">\n");
      out.write("            <h5>PIT/RIT</h5>\n");
      out.write("            <h6>Plano Individual de Trabalho</h6>\n");
      out.write("            <h6>Relatório Individual de Trabalho</h6>\n");
      out.write("        </div>\n");
      out.write("\n");
      out.write("        <!-- Identificação Usuário -->\n");
      out.write("\n");
      out.write("        <div class=\"col-md-2 dropdown\">\n");
      out.write("            <div class=\"dropdown\">\n");
      out.write("                <div class=\"foto-usuario\">\n");
      out.write("                    <img src=\"img/foto_user.png\" alt=\"Foto do Perfil do Usuário\"/><br>\n");
      out.write("                </div>\n");
      out.write("\n");
      out.write("                <div>\n");
      out.write("                    <span>Bem Vindo,</span><br>\n");
      out.write("                    <a class=\"dropdown-toggle\" id=\"menu1\" data-toggle=\"dropdown\" data-target=\"#\" role=\"button\">\n");
      out.write("                        <span>João Andrade</span>\n");
      out.write("                    </a>\n");
      out.write("                    <span class=\"caret\"></span>\n");
      out.write("\n");
      out.write("                    <!-- Abre as opções do menu -->\n");
      out.write("\n");
      out.write("                    <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"menu1\">\n");
      out.write("                        <li role=\"presentation\">\n");
      out.write("                            <a role=\"button\"><span class=\"glyphicon glyphicon-cog\"></span> Perfil</a>\n");
      out.write("                        </li>\n");
      out.write("                        <li role=\"presentation\">\n");
      out.write("                            <a role=\"button\" href=\"ajuda.html\" target=\"_blank\"><span class=\"glyphicon glyphicon-question-sign\"></span> Ajuda</a>\n");
      out.write("                        </li>\n");
      out.write("                        <li role=\"presentation\" class=\"divider\"></li>\n");
      out.write("                        <li role=\"presentation\">\n");
      out.write("                            <a role=\"button\" href=\"logout\"><span class=\"glyphicon glyphicon-off\"></span> Sair</a>\n");
      out.write("                        </li>\n");
      out.write("                    </ul>\n");
      out.write("                </div>\n");
      out.write("\n");
      out.write("            </div>\n");
      out.write("        </div>\n");
      out.write("    </nav>\n");
      out.write("</div>");
      out.write("\n");
      out.write("            \n");
      out.write("            <!-- Area Central -->\n");
      out.write("            ");
      out.write("<!--Area Central Coordenador-->\n");
      out.write("            <div class=\"area-central\">\n");
      out.write("                <!-- Area destina a alertas -->\n");
      out.write("                <div class=\"col-md-offset-2 col-md-8 alert alert-info alert-dismissible fade in\" role=\"alert\">\n");
      out.write("                    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n");
      out.write("                    <h4>Prezados servidores,</h4>\n");
      out.write("                    <p>A Pró-Reitoria de Ensino tem recebido diversas solicitações e demandas para solução de problemas\n");
      out.write("                        que decorrem do desconhecimento ou da não aplicação das normas do IFBA para a gestão academica.\n");
      out.write("                        Cientes da importancia de atuar dentro do principio da legalidade, ressaltamos a importância de\n");
      out.write("                        observar os documentos institucionais que regulamentam a distribuição da carga horária docente e\n");
      out.write("                        o funcionamento dos cursos do IFBA na prática diária da instituição.</p><br>\n");
      out.write("                    <p>\n");
      out.write("                        Com vistas a garantir a indissociabilidade do ensino, pesquisa e extensão, sem comprometer a oferta\n");
      out.write("                        academica que deve garantir aos alunos, apresentamos o NOME DO PROJETO, para a elaboração do Plano \n");
      out.write("                        Individual de Trabalho (PIT) e do Relatório Individua de Trabalho (RIT).\n");
      out.write("                    </p><br>\n");
      out.write("\n");
      out.write("                    <p>\n");
      out.write("                        O PIT e o RIT são instrumentos de planejamento e monitoramento, elaborados pelos docentes, que devem ser\n");
      out.write("                        observados pela Diretoria de Ensino do Campus. \n");
      out.write("                    </p><br>\n");
      out.write("                    <p>\n");
      out.write("                        <button type=\"button\" class=\"btn btn-danger\">Estou Ciente</button>\n");
      out.write("                    </p>\n");
      out.write("                </div>\n");
      out.write("\n");
      out.write("                <!-- Cria-se a DIV cinza superior a branca -->\n");
      out.write("                <div class=\"col-md-offset-2 col-md-8 principal-cinza-top\">\n");
      out.write("                    <ol class=\"breadcrumb\">\n");
      out.write("                        <li><a href=\"#\">Inicio</a></li>\n");
      out.write("                    </ol>\n");
      out.write("                </div>\n");
      out.write("\n");
      out.write("\n");
      out.write("                <!-- Cria-se a DIV branca -->\n");
      out.write("                <div class=\"col-md-offset-2 col-md-8 principal-branco\">\n");
      out.write("                    <!-- Aqui é inserido os botões -->\n");
      out.write("                    <nav class=\"col-md-offset-1 col-md-11 centralizar-btn\">\n");
      out.write("                        <button type=\"button\" class=\"btn btn-primary btn-lg btn-1-cord\" onclick=\"window.location.href='telaRelatorioDePIT.html';\">Plano Individual de<br> Trabalho</button>\n");
      out.write("                        <button type=\"button\" class=\"btn btn-primary btn-lg btn-2-cord\" onclick=\"window.location.href='telaRelatorioDeRIT.html';\">Relatório Individual de<br> Trabalho</button>\n");
      out.write("                        <button type=\"button\" class=\"btn btn-primary btn-lg btn-3-cord\" onclick=\"window.location.href='telaRelatorioDisciplinas.html';\">Gerenciar<br> Disciplinas</button>\n");
      out.write("                        <button type=\"button\" class=\"btn btn-primary btn-lg btn-4-cord\" onclick=\"window.location.href='telaRelatorioDeProfessores.html';\">Gerenciar Professores do<br> Curso</button>\n");
      out.write("                        <button type=\"button\" class=\"btn btn-primary btn-lg btn-5-cord\" onclick=\"window.location.href='telaRelatorioComunicados.html';\">Gerenciar<br> Alertas</button>\n");
      out.write("                        <button type=\"button\" class=\"btn btn-primary btn-lg btn-6-cord disabled\" >Comunicados</button>\n");
      out.write("                    </nav>\n");
      out.write("                </div>\n");
      out.write("\n");
      out.write("                <!-- Cria-se a DIV cinza inferior a branca -->\n");
      out.write("                <div class=\"col-md-offset-2 col-md-8 principal-cinza-bottom\"></div>\n");
      out.write("\n");
      out.write("            </div>");
      out.write("\n");
      out.write("            \n");
      out.write("            <!-- Area do Rodapé -->\n");
      out.write("            ");
      out.write("<!-- Inicio do Footer -->\n");
      out.write("            <div class=\"row\">\n");
      out.write("                <footer class=\"rodape col-md-12\">\n");
      out.write("                    <p>Aplicativo desenvolvido pelos alunos do curso de Licenciatura em Computação<br>\n");
      out.write("                        <a href=\"#\" target=\"_blank\">@LucasMatos</a>,\n");
      out.write("                        <a href=\"#\" target=\"_blank\">@KellySena</a> e \n");
      out.write("                        <a href=\"#\" target=\"_blank\">@WallaceFernandes</a>.\n");
      out.write("                    </p>        \n");
      out.write("                </footer>\n");
      out.write("            </div>\n");
      out.write("            <!-- Fim do Footer -->");
      out.write('\n');

        } else if(nivel.equals("2")){

      out.write("\n");
      out.write("<!-- Area da Barra no TOPO -->\n");
      out.write("            ");
      out.write("<!-- NAVBAR PRINCIPAL -->\n");
      out.write("<div class=\"row\">\n");
      out.write("    <nav class=\"navbar navbar-default\">\n");
      out.write("\n");
      out.write("        <!-- LOGO do projeto -->\n");
      out.write("        <div class=\"col-md-offset-1 col-md-2\">\n");
      out.write("            <a href=\"#\"><img src=\"img/Logo - IFBA.png\" class=\"logo-principal\" alt=\"Logo do IFBA\"/></a>\n");
      out.write("        </div>\n");
      out.write("\n");
      out.write("        <!-- NOME do projeto -->\n");
      out.write("        <div class=\"col-md-6 navbar-nome-projeto\">\n");
      out.write("            <h5>PIT/RIT</h5>\n");
      out.write("            <h6>Plano Individual de Trabalho</h6>\n");
      out.write("            <h6>Relatório Individual de Trabalho</h6>\n");
      out.write("        </div>\n");
      out.write("\n");
      out.write("        <!-- Identificação Usuário -->\n");
      out.write("\n");
      out.write("        <div class=\"col-md-2 dropdown\">\n");
      out.write("            <div class=\"dropdown\">\n");
      out.write("                <div class=\"foto-usuario\">\n");
      out.write("                    <img src=\"img/foto_user.png\" alt=\"Foto do Perfil do Usuário\"/><br>\n");
      out.write("                </div>\n");
      out.write("\n");
      out.write("                <div>\n");
      out.write("                    <span>Bem Vindo,</span><br>\n");
      out.write("                    <a class=\"dropdown-toggle\" id=\"menu1\" data-toggle=\"dropdown\" data-target=\"#\" role=\"button\">\n");
      out.write("                        <span>João Andrade</span>\n");
      out.write("                    </a>\n");
      out.write("                    <span class=\"caret\"></span>\n");
      out.write("\n");
      out.write("                    <!-- Abre as opções do menu -->\n");
      out.write("\n");
      out.write("                    <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"menu1\">\n");
      out.write("                        <li role=\"presentation\">\n");
      out.write("                            <a role=\"button\"><span class=\"glyphicon glyphicon-cog\"></span> Perfil</a>\n");
      out.write("                        </li>\n");
      out.write("                        <li role=\"presentation\">\n");
      out.write("                            <a role=\"button\" href=\"ajuda.html\" target=\"_blank\"><span class=\"glyphicon glyphicon-question-sign\"></span> Ajuda</a>\n");
      out.write("                        </li>\n");
      out.write("                        <li role=\"presentation\" class=\"divider\"></li>\n");
      out.write("                        <li role=\"presentation\">\n");
      out.write("                            <a role=\"button\" href=\"logout\"><span class=\"glyphicon glyphicon-off\"></span> Sair</a>\n");
      out.write("                        </li>\n");
      out.write("                    </ul>\n");
      out.write("                </div>\n");
      out.write("\n");
      out.write("            </div>\n");
      out.write("        </div>\n");
      out.write("    </nav>\n");
      out.write("</div>");
      out.write("\n");
      out.write("            \n");
      out.write("            <!-- Area Central -->\n");
      out.write("            ");
      out.write("<!-- Area Central Professor -->\n");
      out.write("            <div class=\"area-central\">\n");
      out.write("                <!-- Area destina a alertas -->\n");
      out.write("                <div class=\"col-md-offset-2 col-md-8 alert alert-info alert-dismissible fade in\" role=\"alert\">\n");
      out.write("                    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n");
      out.write("                    <h4>Prezados servidores,</h4>\n");
      out.write("                    <p>A Pró-Reitoria de Ensino tem recebido diversas solicitações e demandas para solução de problemas\n");
      out.write("                        que decorrem do desconhecimento ou da não aplicação das normas do IFBA para a gestão academica.\n");
      out.write("                        Cientes da importancia de atuar dentro do principio da legalidade, ressaltamos a importância de\n");
      out.write("                        observar os documentos institucionais que regulamentam a distribuição da carga horária docente e\n");
      out.write("                        o funcionamento dos cursos do IFBA na prática diária da instituição.</p><br>\n");
      out.write("                    <p>\n");
      out.write("                        Com vistas a garantir a indissociabilidade do ensino, pesquisa e extensão, sem comprometer a oferta\n");
      out.write("                        academica que deve garantir aos alunos, apresentamos o NOME DO PROJETO, para a elaboração do Plano \n");
      out.write("                        Individual de Trabalho (PIT) e do Relatório Individua de Trabalho (RIT).\n");
      out.write("                    </p><br>\n");
      out.write("\n");
      out.write("                    <p>\n");
      out.write("                        O PIT e o RIT são instrumentos de planejamento e monitoramento, elaborados pelos docentes, que devem ser\n");
      out.write("                        observados pela Diretoria de Ensino do Campus. \n");
      out.write("                    </p><br>\n");
      out.write("                    <p>\n");
      out.write("                        <button type=\"button\" class=\"btn btn-danger\">Estou Ciente</button>\n");
      out.write("                    </p>\n");
      out.write("                </div>\n");
      out.write("\n");
      out.write("                <!-- Cria-se a DIV cinza superior a branca -->\n");
      out.write("                <div class=\"col-md-offset-2 col-md-8 principal-cinza-top\">\n");
      out.write("                    <ol class=\"breadcrumb\">\n");
      out.write("                        <li><a href=\"#\">Inicio</a></li>\n");
      out.write("                    </ol>\n");
      out.write("                </div>\n");
      out.write("\n");
      out.write("\n");
      out.write("                <!-- Cria-se a DIV branca -->\n");
      out.write("                <div class=\"col-md-offset-2 col-md-8 principal-branco\">\n");
      out.write("                    <!-- Aqui é inserido os botões -->\n");
      out.write("                    <nav class=\"col-md-offset-3 centralizar-btn\">\n");
      out.write("                        <button type=\"button\" class=\"btn btn-primary btn-lg btn-1-professor\" onclick=\"window.location.href='telaRelatorioDePIT.html';\">Plano Individual de<br> Trabalho</button>\n");
      out.write("                        <button type=\"button\" class=\"btn btn-primary btn-lg btn-2-professor\" onclick=\"window.location.href='telaRelatorioDeRIT.html';\">Relatório Individual de<br> Trabalho</button>\n");
      out.write("                    </nav>\n");
      out.write("                </div>\n");
      out.write("\n");
      out.write("                <!-- Cria-se a DIV cinza inferior a branca -->\n");
      out.write("                <div class=\"col-md-offset-2 col-md-8 principal-cinza-bottom\"></div>\n");
      out.write("\n");
      out.write("            </div>");
      out.write("\n");
      out.write("            \n");
      out.write("            <!-- Area do Rodapé -->\n");
      out.write("            ");
      out.write("<!-- Inicio do Footer -->\n");
      out.write("            <div class=\"row\">\n");
      out.write("                <footer class=\"rodape col-md-12\">\n");
      out.write("                    <p>Aplicativo desenvolvido pelos alunos do curso de Licenciatura em Computação<br>\n");
      out.write("                        <a href=\"#\" target=\"_blank\">@LucasMatos</a>,\n");
      out.write("                        <a href=\"#\" target=\"_blank\">@KellySena</a> e \n");
      out.write("                        <a href=\"#\" target=\"_blank\">@WallaceFernandes</a>.\n");
      out.write("                    </p>        \n");
      out.write("                </footer>\n");
      out.write("            </div>\n");
      out.write("            <!-- Fim do Footer -->");
      out.write('\n');
      }
    } else{

      out.write("\n");
      out.write("<!-- Area da Barra no TOPO -->\n");
      out.write("            ");
      out.write("<!-- Inicio NAVBAR -->\n");
      out.write("            <div class=\"row\">\n");
      out.write("                <nav class=\"navbar navbar-default\">\n");
      out.write("                    <!-- NOME do projeto -->\n");
      out.write("                    <div class=\"navbar-nome-projeto\">\n");
      out.write("                        <h5><b>PIT/RIT</b></h5>\n");
      out.write("                        <h6><b>Plano Individual de Trabalho</b></h6>\n");
      out.write("                        <h6><b>Relatório Individual de Trabalho</b></h6>\n");
      out.write("                    </div>\n");
      out.write("                </nav>\n");
      out.write("            </div>");
      out.write("\n");
      out.write("\n");
      out.write("            <!-- Area Central -->\n");
      out.write("            ");
      out.write("<!-- Formulario de Login -->\n");
      out.write("            <div class=\"contcustom\">\n");
      out.write("                <form action=\"login\" method=\"post\">\n");
      out.write("                    <div>\n");
      out.write("                        <img src=\"img/Logo - IFBA.png\" class=\"logo-inicio\" alt=\"Logo do IFBA\"/>\n");
      out.write("                    </div>\n");
      out.write("\n");
      out.write("                    <div>\n");
      out.write("                        <input name=\"usuario\" type=\"text\" placeholder=\"USUÁRIO\" class=\"input-inicio\">\n");
      out.write("                        <input name=\"senha\" type=\"password\" placeholder=\"SENHA\" class=\"input-inicio\">\n");
      out.write("                        <button class=\"btn btn-default wide\" type=\"submit\" value=\"entrar\"><span class=\"fa fa-check med\"></span><b>Entrar</b></button>\n");
      out.write("                        <a><h5>Esqueci a senha</h5></a>\n");
      out.write("                    </div>\n");
      out.write("                </form>\n");
      out.write("            </div>");
      out.write("\n");
      out.write("            \n");
      out.write("            <!-- Area do Rodapé -->\n");
      out.write("            ");
      out.write("<!-- Inicio do Footer -->\n");
      out.write("            <div class=\"row\">\n");
      out.write("                <footer class=\"rodape col-md-12\">\n");
      out.write("                    <p>Aplicativo desenvolvido pelos alunos do curso de Licenciatura em Computação<br>\n");
      out.write("                        <a href=\"#\" target=\"_blank\">@LucasMatos</a>,\n");
      out.write("                        <a href=\"#\" target=\"_blank\">@KellySena</a> e \n");
      out.write("                        <a href=\"#\" target=\"_blank\">@WallaceFernandes</a>.\n");
      out.write("                    </p>        \n");
      out.write("                </footer>\n");
      out.write("            </div>\n");
      out.write("            <!-- Fim do Footer -->");
      out.write('\n');

    }

      out.write('\n');
      out.write("\n");
      out.write("        </div>\n");
      out.write("        <!-- Fim do Conteudo -->\n");
      out.write("    </body>\n");
      out.write("</html>");
    } catch (Throwable t) {
      if (!(t instanceof SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          out.clearBuffer();
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
