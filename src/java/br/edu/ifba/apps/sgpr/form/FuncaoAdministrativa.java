package br.edu.ifba.apps.sgpr.form;

import java.time.LocalDate;
import java.util.Objects;

/**
 * @author Teste
 */
public class FuncaoAdministrativa{
    private Long id;
    private String funcao;
    private LocalDate dataInicial;
    private LocalDate datafinal;
    private int cargaHorariaSemanal;
    private String descricaoAtividades;
    private String produtosEsperados;
    
    //Construtor Completo
    public FuncaoAdministrativa(String funcao, LocalDate dataInicial, LocalDate datafinal,
            int cargaHorariaSemanal, String descricaoAtividades, String produtosEsperados) {
        this.setFuncao(funcao);
        this.setDataInicial(dataInicial);
        this.setDatafinal(datafinal);
        this.setCargaHorariaSemanal(cargaHorariaSemanal);
        this.setDescricaoAtividades(descricaoAtividades);
        this.setProdutosEsperados(produtosEsperados);
    }
    
    //Metodos Get
    public String getFuncao(){
        return funcao;
    }
    
    public LocalDate getDataInicial() {
        return dataInicial;
    }

    public LocalDate getDatafinal() {
        return datafinal;
    }

    public int getCargaHorariaSemanal() {
        return cargaHorariaSemanal;
    }

    public String getDescricaoAtividades() {
        return descricaoAtividades;
    }

    public String getProdutosEsperados() {
        return produtosEsperados;
    }
    
    //Metodos Sets
    public void setFuncao(String funcao){
        this.funcao = funcao;
    }
    
    public void setDataInicial(LocalDate dataInicial) {
        this.dataInicial = dataInicial;
    }

    public void setDatafinal(LocalDate datafinal) {
        this.datafinal = datafinal;
    }

    public void setCargaHorariaSemanal(int cargaHorariaSemanal) {
        this.cargaHorariaSemanal = cargaHorariaSemanal;
    }

    public void setDescricaoAtividades(String descricaoAtividades) {
        this.descricaoAtividades = descricaoAtividades;
    }

    public void setProdutosEsperados(String produtosEsperados) {
        this.produtosEsperados = produtosEsperados;
    }
    
    //Metodos HashCode, Equals e  ToString
    @Override
    public int hashCode() {
        int hash = 5;
        hash = 67 * hash + Objects.hashCode(this.funcao);
        hash = 67 * hash + Objects.hashCode(this.dataInicial);
        hash = 67 * hash + Objects.hashCode(this.datafinal);
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
        final FuncaoAdministrativa other = (FuncaoAdministrativa) obj;
        if (!Objects.equals(this.funcao, other.funcao)) {
            return false;
        }
        if (!Objects.equals(this.dataInicial, other.dataInicial)) {
            return false;
        }
        if (!Objects.equals(this.datafinal, other.datafinal)) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "FuncaoAdministrativa{\n"
                + "id=" + id + ",\n "
                + "funcao=" + funcao + ",\n "
                + "dataInicial=" + dataInicial + ",\n "
                + "datafinal=" + datafinal + ",\n "
                + "cargaHorariaSemanal=" + cargaHorariaSemanal + ",\n "
                + "descricaoAtividades=" + descricaoAtividades + ",\n "
                + "produtosEsperados=" + produtosEsperados + '\n'
             +'}';
    }
}
