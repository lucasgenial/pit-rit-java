package br.edu.ifba.apps.sgpr.atores;

import br.edu.ifba.apps.sgpr.classes.Curso;
import br.edu.ifba.apps.sgpr.classes.Endereco;
import java.time.LocalDate;

/**
 * @author Teste
 */
public class Coordenador extends Professor{
    private Curso cursoCoordenado;
    
    //Construtor Padrão
    public Coordenador(Curso cursoCoordenado, String login, String senha, long cpf, String nome, String email) {
        super(login, senha, cpf, nome, email);
        this.setCursoCoordenado(cursoCoordenado);
    }
    
    //Construtor Completo
    public Coordenador(Curso cursoCoordenado, String login, String senha, long cpf, String nome, String sexo, LocalDate dataNascimento, Endereco endereco, String telefone, String celular, String email, int siape, int classe, int nivel, int regimeTrabalho, String cargaHoraria, int funcaoCargo) {
        super(login, senha, cpf, nome, sexo, dataNascimento, endereco, telefone, celular, email, siape, classe, nivel, regimeTrabalho, cargaHoraria, funcaoCargo);
        this.setCursoCoordenado(cursoCoordenado);
    }
    
    //Criação dos Gets e Sets
    public Curso getCursoCoordenado() {
        return cursoCoordenado;
    }

    public void setCursoCoordenado(Curso cursoCoordenado) {
        this.cursoCoordenado = cursoCoordenado;
    }
    
    //Metodos da Classe

    //ToString
    @Override
    public String toString() {
        return super.toString() + "Coordenador{\n "
                        + "CursoCoordenado=" + this.getCursoCoordenado() + '\n'
                    +'}';
    }
}
