package br.edu.ifba.apps.sgpr.form;

import br.edu.ifba.apps.sgpr.classes.TiposTreinamento;
import java.time.LocalDate;
import java.util.Objects;

/**
 * @author Teste
 */
public class Treinamento {

    private Long id;
    private TiposTreinamento tipoTreinamento;
    private String descricaoTreinamento;
    private String areaConhecimento;
    private String instituicao;
    private LocalDate dataInicial;
    private LocalDate dataFinal;
    private int cargaHorariaTotal;

    //Constutor
    public Treinamento(TiposTreinamento tipoTreinamento, String descricaoTreinamento, String areaConhecimento,
            String instituicao, LocalDate dataInicial, LocalDate dataFinal, int cargaHorariaTotal) {
        this.setTipoTreinamento(tipoTreinamento);
        this.setDescricaoTreinamento(descricaoTreinamento);
        this.setAreaConhecimento(areaConhecimento);
        this.setInstituicao(instituicao);
        this.setDataInicial(dataInicial);
        this.setDataFinal(dataFinal);
        this.setCargaHorariaTotal(cargaHorariaTotal);
    }

    //Metodos Sets
    public void setTipoTreinamento(TiposTreinamento tipoTreinamento) {
        this.tipoTreinamento = tipoTreinamento;
    }

    public void setDescricaoTreinamento(String descricaoTreinamento) {
        this.descricaoTreinamento = descricaoTreinamento;
    }

    public void setAreaConhecimento(String areaConhecimento) {
        this.areaConhecimento = areaConhecimento;
    }

    public void setInstituicao(String instituicao) {
        this.instituicao = instituicao;
    }

    public void setDataInicial(LocalDate dataInicial) {
        this.dataInicial = dataInicial;
    }

    public void setDataFinal(LocalDate dataFinal) {
        this.dataFinal = dataFinal;
    }

    public void setCargaHorariaTotal(int cargaHorariaTotal) {
        this.cargaHorariaTotal = cargaHorariaTotal;
    }

    //Metodos Gets
    public Long getId() {
        return id;
    }

    public TiposTreinamento getTipoTreinamento() {
        return tipoTreinamento;
    }

    public String getDescricaoTreinamento() {
        return descricaoTreinamento;
    }

    public String getAreaConhecimento() {
        return areaConhecimento;
    }

    public String getInstituicao() {
        return instituicao;
    }

    public LocalDate getDataInicial() {
        return dataInicial;
    }

    public LocalDate getDataFinal() {
        return dataFinal;
    }

    public int getCargaHorariaTotal() {
        return cargaHorariaTotal;
    }

    //Metodos HashCode, Equals e ToString
    @Override
    public int hashCode() {
        int hash = 7;
        hash = 59 * hash + Objects.hashCode(this.tipoTreinamento);
        hash = 59 * hash + Objects.hashCode(this.descricaoTreinamento);
        hash = 59 * hash + Objects.hashCode(this.areaConhecimento);
        hash = 59 * hash + Objects.hashCode(this.instituicao);
        hash = 59 * hash + Objects.hashCode(this.dataInicial);
        hash = 59 * hash + Objects.hashCode(this.dataFinal);
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
        final Treinamento other = (Treinamento) obj;
        if (!Objects.equals(this.tipoTreinamento, other.tipoTreinamento)) {
            return false;
        }
        if (!Objects.equals(this.descricaoTreinamento, other.descricaoTreinamento)) {
            return false;
        }
        if (!Objects.equals(this.areaConhecimento, other.areaConhecimento)) {
            return false;
        }
        if (!Objects.equals(this.instituicao, other.instituicao)) {
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
        return "Treinamento{\n"
                + "id=" + id + ",\n "
                + "tipoTreinamento=" + tipoTreinamento + ",\n "
                + "descricaoTreinamento=" + descricaoTreinamento + ",\n "
                + "areaConhecimento=" + areaConhecimento + ",\n "
                + "instituicao=" + instituicao + ",\n "
                + "dataInicial=" + dataInicial + ",\n "
                + "dataFinal=" + dataFinal + ",\n "
                + "cargaHorariaTotal=" + cargaHorariaTotal + "\n"
                + '}';
    }
}
