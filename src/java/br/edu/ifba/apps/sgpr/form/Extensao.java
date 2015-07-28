package br.edu.ifba.apps.sgpr.form;

import br.edu.ifba.apps.sgpr.classes.NomeExtensao;
import br.edu.ifba.apps.sgpr.classes.PublicoAlvo;
import java.time.LocalDate;
import java.util.Objects;

/**
 * @author Teste
 */
public class Extensao {
    private Long id;
    private NomeExtensao nomeExtensao;
    private PublicoAlvo publicoAlvo;
    private LocalDate dataInicial;
    private LocalDate dataFinal;
    private int cargaHorariaSemanal;
    private String produtosEsperados;
    
    //Metodo Sets
    public void setNomeExtensao(NomeExtensao nomeExtensao) {
        this.nomeExtensao = nomeExtensao;
    }

    public void setPublicoAlvo(PublicoAlvo publicoAlvo) {
        this.publicoAlvo = publicoAlvo;
    }

    public void setDataInicial(LocalDate dataInicial) {
        this.dataInicial = dataInicial;
    }

    public void setDataFinal(LocalDate dataFinal) {
        this.dataFinal = dataFinal;
    }

    public void setCargaHorariaSemanal(int cargaHorariaSemanal) {
        this.cargaHorariaSemanal = cargaHorariaSemanal;
    }

    public void setProdutosEsperados(String produtosEsperados) {
        this.produtosEsperados = produtosEsperados;
    }
    
    //Metodos Gets

    public NomeExtensao getNomeExtensao() {
        return nomeExtensao;
    }

    public PublicoAlvo getPublicoAlvo() {
        return publicoAlvo;
    }

    public LocalDate getDataInicial() {
        return dataInicial;
    }

    public LocalDate getDataFinal() {
        return dataFinal;
    }

    public int getCargaHorariaSemanal() {
        return cargaHorariaSemanal;
    }

    public String getProdutosEsperados() {
        return produtosEsperados;
    }
    
    //Metodos HashCode, Equals e ToString

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 41 * hash + Objects.hashCode(this.nomeExtensao);
        hash = 41 * hash + Objects.hashCode(this.publicoAlvo);
        hash = 41 * hash + Objects.hashCode(this.dataInicial);
        hash = 41 * hash + Objects.hashCode(this.dataFinal);
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
        final Extensao other = (Extensao) obj;
        if (!Objects.equals(this.nomeExtensao, other.nomeExtensao)) {
            return false;
        }
        if (!Objects.equals(this.publicoAlvo, other.publicoAlvo)) {
            return false;
        }
        if (!Objects.equals(this.dataInicial, other.dataInicial)) {
            return false;
        }
        if (!Objects.equals(this.dataFinal, other.dataFinal)) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Extensao{\n"
                + "id=" + id + ",\n "
                + "nomeExtensao=" + nomeExtensao + ",\n "
                + "publicoAlvo=" + publicoAlvo + ",\n "
                + "dataInicial=" + dataInicial + ",\n "
                + "dataFinal=" + dataFinal + ",\n "
                + "cargaHorariaSemanal=" + cargaHorariaSemanal + ",\n "
                + "produtosEsperados=" + produtosEsperados + "\n"
              +'}';
    }
}