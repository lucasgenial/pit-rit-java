package br.edu.ifba.apps.sgpr.classes;

import java.io.Serializable;
import java.util.Objects;

/**
 * @author Teste
 */
public class Disciplina implements Serializable{
    private Long id;
    private String sigla;
    private String nome;
    private int cargaHoraria;
    
    //Construtor Completo
    public Disciplina(String sigla, String nome, int cargaHoraria) {
        this.sigla = sigla;
        this.nome = nome;
        this.cargaHoraria = cargaHoraria;
    }
    
    //Metodos de Gets

    public Long getId() {
        return id;
    }

    public String getSigla() {
        return sigla;
    }

    public String getNome() {
        return nome;
    }

    public int getCargaHoraria() {
        return cargaHoraria;
    }
    
    //Metodos de Sets
    public void setSigla(String sigla) {
        this.sigla = sigla;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setCargaHoraria(int cargaHoraria) {
        this.cargaHoraria = cargaHoraria;
    }
    
    //Metodos HashCode e Equals
    @Override
    public int hashCode() {
        int hash = 7;
        hash = 97 * hash + Objects.hashCode(this.id);
        hash = 97 * hash + Objects.hashCode(this.sigla);
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
        final Disciplina other = (Disciplina) obj;
        if (!Objects.equals(this.id, other.id)) {
            return false;
        }
        if (!Objects.equals(this.sigla, other.sigla)) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Disciplina{\n"
                + "id=" + id + ",\n "
                + "sigla=" + sigla + ",\n "
                + "nome=" + nome + ",\n "
                + "cargaHoraria=" + cargaHoraria + '\n'
             +'}';
    }
}
