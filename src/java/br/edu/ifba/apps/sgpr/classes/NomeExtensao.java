package br.edu.ifba.apps.sgpr.classes;

import java.util.Objects;

/**
 * @author Teste
 */
public class NomeExtensao {
    private Long id;
    private String nome;
    private boolean status;
    
    //Construtor
    public NomeExtensao(String nome, boolean ativo) {
        this.setNome(nome);
        this.setStatus(ativo);
    }
    
    //Construtor que Inclui os 
    public NomeExtensao(String nome) {
        this.setNome(nome);
        this.setStatus(true);
    }
    
    //Metodos Gets e Sets
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
    
    private void setStatus(boolean ativo) {
        this.status = ativo;
    }
    
    private boolean isAtivo(){
        return this.status;
    }
    
    //Metodos HashCode Equals e ToString
    @Override
    public int hashCode() {
        int hash = 3;
        hash = 83 * hash + Objects.hashCode(this.nome);
        hash = 83 * hash + (this.status ? 1 : 0);
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
        final NomeExtensao other = (NomeExtensao) obj;
        
        if (!Objects.equals(this.nome, other.nome)) {
            return false;
        }
        if (this.status != other.status) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "NomeExtensao{\n"
                + "id=" + id + ",\n "
                + "nome=" + nome + ",\n "
                + "status=" + status + "\n"
                +'}';
    }
}
