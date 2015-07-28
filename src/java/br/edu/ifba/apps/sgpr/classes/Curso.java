package br.edu.ifba.apps.sgpr.classes;

import java.io.Serializable;
import java.util.List;
import java.util.Objects;

/**
 * @author Teste
 */
public class Curso implements Serializable{
    private Long id;
    private String nome;
    private String turno;
    private List<Disciplina> disciplinas;
    
    //Construtor Completo
    public Curso(String nome, String turno, List<Disciplina> disciplinas) {
        this.setNome(nome);
        this.setTurno(turno);
        this.setDisciplinas(disciplinas);
    }
    
    //Metodos Gets
    public String getNome() {
        return nome;
    }

    public String getTurno() {
        return turno;
    }

    public List<Disciplina> getDisciplinas() {
        return disciplinas;
    }
    
    //Metodos Sets

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setTurno(String turno) {
        this.turno = turno;
    }

    public void setDisciplinas(List<Disciplina> disciplinas) {
        this.disciplinas = disciplinas;
    }
    
    //Metodos HashCode e Equals

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 37 * hash + Objects.hashCode(this.id);
        hash = 37 * hash + Objects.hashCode(this.nome);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Curso other = (Curso) obj;
        if (!Objects.equals(this.id, other.id)) {
            return false;
        }
        if (!Objects.equals(this.nome, other.nome)) {
            return false;
        }
        return true;
    }
    
    //ToString
    @Override
    public String toString() {
        return "Curso{\n"
                + "id=" + id + ",\n "
                + "nome=" + nome + ",\n "
                + "turno=" + turno + ",\n "
                + "disciplinas=" + disciplinas + '\n'
             +'}';
    }
}
