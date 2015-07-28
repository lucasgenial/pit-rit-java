package br.edu.ifba.apps.sgpr.form;

import br.edu.ifba.apps.sgpr.classes.GruposDePesquisas;
import br.edu.ifba.apps.sgpr.classes.LinhasDePesquisas;
import java.util.Objects;

/**
 * @author Teste
 */
public class Pesquisa {
    private Long id;
    private String titulo;
    private LinhasDePesquisas linhaPesquisa;
    private GruposDePesquisas grupoPesquisa;
    private int cargaHorariaSemanal;
    private String descricaoAtividades;
    
    //Construtor
    public Pesquisa(String titulo, LinhasDePesquisas linhaPesquisa, int cargaHorariaSemanal, GruposDePesquisas grupoPesquisa) {
        this.setTitulo(titulo);
        this.setGrupoPesquisa(grupoPesquisa);
        this.setGrupoPesquisa(grupoPesquisa);
        this.setCargaHorariaSemanal(cargaHorariaSemanal);
    }
    
    //Metodos Sets
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public void setLinhaPesquisa(LinhasDePesquisas linhaPesquisa) {
        this.linhaPesquisa = linhaPesquisa;
    }

    public void setCargaHorariaSemanal(int cargaHorariaSemanal) {
        this.cargaHorariaSemanal = cargaHorariaSemanal;
    }

    public void setGrupoPesquisa(GruposDePesquisas grupoPesquisa) {
        this.grupoPesquisa = grupoPesquisa;
    }
    
    public void setDescricaoAtividades(String descricao){
        this.descricaoAtividades = descricao;
    }
    
    //Metodos Gets
    public String getTitulo() {
        return titulo;
    }

    public LinhasDePesquisas getLinhaPesquisa() {
        return linhaPesquisa;
    }

    public int getCargaHorariaSemanal() {
        return cargaHorariaSemanal;
    }

    public GruposDePesquisas getGrupoPesquisa() {
        return grupoPesquisa;
    }
    
    public String getDescricaoAtividades(){
        return descricaoAtividades;
    }
    
    //Metodos HashCode, Equals e ToString
    @Override
    public int hashCode() {
        int hash = 7;
        hash = 29 * hash + Objects.hashCode(this.titulo);
        hash = 29 * hash + Objects.hashCode(this.linhaPesquisa);
        hash = 29 * hash + Objects.hashCode(this.grupoPesquisa);
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
        final Pesquisa other = (Pesquisa) obj;
        if (!Objects.equals(this.titulo, other.titulo)) {
            return false;
        }
        if (!Objects.equals(this.linhaPesquisa, other.linhaPesquisa)) {
            return false;
        }
        if (!Objects.equals(this.grupoPesquisa, other.grupoPesquisa)) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Pesquisa{\n"
                + "id=" + id + ",\n "
                + "titulo=" + titulo + ",\n "
                + "linhaPesquisa=" + linhaPesquisa + ",\n "
                + "grupoPesquisa=" + grupoPesquisa + ",\n "
                + "cargaHorariaSemanal=" + cargaHorariaSemanal + ",\n "
                + "descricaoAtividades=" + descricaoAtividades + ",\n "
               +'}';
    }
}
