package br.edu.ifba.apps.sgpr.classes;

import java.util.Objects;

/**
 * @author Teste
 */
public class Endereco {
    private Long id;
    private int cidade;
    private int bairro;
    private String tipoLogradouro;
    private String nomeLogradouro;
    private int numero;
    private String cep;

    //Construtor Completo
    public Endereco() {
    }
    
    //Construtor Padrão
    public Endereco(int cidade, int bairro, String tipoLogradouro, 
            String nomeLogradouro, int numero, String cep) {
        this.setCidade(cidade);
        this.setBairro(bairro);
        this.setTipoLogradouro(tipoLogradouro);
        this.setNomeLogradouro(nomeLogradouro);
        this.setNumero(numero);
        this.setCep(cep);
    }    

    //Criação dos SETS
    public void setCidade(int cidade) {
        this.cidade = cidade;
    }

    public void setBairro(int bairro) {
        this.bairro = bairro;
    }

    public void setTipoLogradouro(String tipoLogradouro) {
        this.tipoLogradouro = tipoLogradouro;
    }

    public void setNomeLogradouro(String nomeLogradouro) {
        this.nomeLogradouro = nomeLogradouro;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }
    
    public void setCep(String cep) {
        this.cep = cep;
    }

    //Criação dos GETS
    public int getCidade() {
        return cidade;
    }

    public int getBairro() {
        return bairro;
    }

    public String getTipoLogradouro() {
        return tipoLogradouro;
    }

    public String getNomeLogradouro() {
        return nomeLogradouro;
    }

    public int getNumero() {
        return numero;
    }
    
    public String getCep() {
        return cep;
    }
    
    //Metodos HashCode Equals e ToString
    @Override
    public int hashCode() {
        int hash = 7;
        hash = 53 * hash + Objects.hashCode(this.id);
        hash = 53 * hash + this.cidade;
        hash = 53 * hash + this.bairro;
        hash = 53 * hash + Objects.hashCode(this.tipoLogradouro);
        hash = 53 * hash + Objects.hashCode(this.nomeLogradouro);
        hash = 53 * hash + this.numero;
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
        final Endereco other = (Endereco) obj;
        if (!Objects.equals(this.id, other.id)) {
            return false;
        }
        if (this.cidade != other.cidade) {
            return false;
        }
        if (this.bairro != other.bairro) {
            return false;
        }
        if (!Objects.equals(this.tipoLogradouro, other.tipoLogradouro)) {
            return false;
        }
        if (!Objects.equals(this.nomeLogradouro, other.nomeLogradouro)) {
            return false;
        }
        if (this.numero != other.numero) {
            return false;
        }
        if (!Objects.equals(this.cep, other.cep)) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Endereco{\n"
                + "id=" + id + ",\n "
                + "cidade=" + cidade + ",\n "
                + "bairro=" + bairro + ",\n "
                + "tipoLogradouro=" + tipoLogradouro + ",\n "
                + "nomeLogradouro=" + nomeLogradouro + ",\n "
                + "numero=" + numero + ",\n "
                + "cep=" + cep + '\n'
              +'}';
    }

    
}
