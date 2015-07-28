package br.edu.ifba.apps.sgpr.atores;

/**
 * @author Teste
 */
interface Autenticavel {
    public void setSenha(String senha);
    public void setLogin(String login);
    public boolean autentica(String login, String senha);
}
