package br.edu.ifba.apps.sgpr.classes;

import java.util.Objects;

/**
 * @author Teste
 */
public class GruposDePesquisas {
    private Long id;
    private String nome;
    
    //Construtor
    public GruposDePesquisas(String nome) {
        this.nome = nome;
    }
    
    //Metodos Gets e Sets
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
    
    //Metodos HashCode Equals e ToString

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 67 * hash + Objects.hashCode(this.nome);
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
        final GruposDePesquisas other = (GruposDePesquisas) obj;
        if (!Objects.equals(this.nome, other.nome)) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "GruposDePesquisas{\n"
               + "id=" + id + ",\n "
               + "nome=" + nome + '\n'+
             +'}';
    } 
}
