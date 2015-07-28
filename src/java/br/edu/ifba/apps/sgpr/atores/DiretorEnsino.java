package br.edu.ifba.apps.sgpr.atores;

import br.edu.ifba.apps.sgpr.classes.Endereco;
import java.time.LocalDate;

/**
 * @author Teste
 */
public class DiretorEnsino extends Servidor implements Autenticavel{
    private String login;
    private String senha;

    //Construtor Padrão
    public DiretorEnsino(String login, String senha, long cpf, String nome, String email) {
        super(cpf, nome, email);
        this.setLogin(login);
        this.setSenha(senha);
    }

    //Construtor Completo
    public DiretorEnsino(String login, String senha, long cpf, String nome, String sexo, LocalDate dataNascimento, Endereco endereco, String telefone, String celular, String email, int siape, int classe, int nivel, int regimeTrabalho, String cargaHoraria, int funcaoCargo) {
        super(cpf, nome, sexo, dataNascimento, endereco, telefone, celular, email, siape, classe, nivel, regimeTrabalho, cargaHoraria, funcaoCargo);
        this.setLogin(login);
        this.setSenha(senha);
    }

    //Criação do SETS
    @Override
    public void setLogin(String login) {
        this.login = login;
    }

    @Override
    public void setSenha(String senha) {
        this.senha = senha;
    }

    //Metodo Autentica da Interface Autenticavel
    @Override
    public boolean autentica(String login, String senha) {
        try {
            return this.senha.equals(senha) && this.login.equals(login);
        } catch (Exception e) {
            return false;
        }
    }
}
