package br.edu.ifba.apps.sgpr.classes;

import java.util.Objects;

/**
 * @author Teste
 */
public class Atividade {
    private Long id;
    private String tipoAtividade;
    
    //Construtor
    public Atividade(String tipoAtividade) {
        this.tipoAtividade = tipoAtividade;
    }
    
    //Metodo Sets
    public void setTipoAtividade(String tipoAtividade) {
        this.tipoAtividade = tipoAtividade;
    }
    
    //Metodo Gets
    public String getTipoAtividade(){
        return this.tipoAtividade;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 37 * hash + Objects.hashCode(this.id);
        hash = 37 * hash + Objects.hashCode(this.tipoAtividade);
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
        final Atividade other = (Atividade) obj;
        if (!Objects.equals(this.id, other.id)) {
            return false;
        }
        if (!Objects.equals(this.tipoAtividade, other.tipoAtividade)) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Atividade{\n"
                + "id=" + id + ",\n "
                + "tipoAtividade=" + tipoAtividade + '\n'
             +'}';
    }
}