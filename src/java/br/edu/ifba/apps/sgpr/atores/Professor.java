package br.edu.ifba.apps.sgpr.atores;

import br.edu.ifba.apps.sgpr.classes.Curso;
import br.edu.ifba.apps.sgpr.classes.Endereco;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

/**
 * @author Teste
 */
public class Professor extends Servidor implements Autenticavel{
    private String login;
    private String senha;
    private List<Curso> cursos;

    public Professor(String login, String senha, long cpf, String nome, String email) {
        super(cpf, nome, email);
        this.setLogin(login);
        this.setSenha(senha);
    }

    public Professor(String login, String senha, long cpf, String nome, String sexo, LocalDate dataNascimento, Endereco endereco, String telefone, String celular, String email, int siape, int classe, int nivel, int regimeTrabalho, String cargaHoraria, int funcaoCargo) {
        super(cpf, nome, sexo, dataNascimento, endereco, telefone, celular, email, siape, classe, nivel, regimeTrabalho, cargaHoraria, funcaoCargo);
        this.setLogin(login);
        this.setSenha(senha);
    }
    
    //Metodo do Professor
    //Criação dos SET
    public void setCursos(List<Curso> cursos) {
        this.cursos = cursos;
    }
    
    @Override
    public void setLogin(String login) {
        this.login = login;
    }

    @Override
    public void setSenha(String senha) {
        this.senha = senha;
    }
    
    
    //Criação do GET
    public List<Curso> getCursos(){
        cursos = new ArrayList<>();
        return cursos;
    }
    
    @Override
    public boolean autentica(String login, String senha) {
        
        try {
            return this.senha.equals(senha) && this.login.equals(login);
        } catch (Exception e) {
            return false;
        }
    }
}
