package br.edu.ifba.apps.sgpr.form;

import br.edu.ifba.apps.sgpr.classes.Atividade;
import java.time.LocalDate;
import java.util.Objects;

/**
 * @author Teste
 */
public class AtividadeExtra{
    private Long id;
    private Atividade tipoAtividade;
    private String descricaoAtividade;
    private LocalDate dataInicio;
    private LocalDate dataFinal;
    private int cargaHorariaTotal;
    
    //Construtor

    public AtividadeExtra(Atividade tipoAtividade, String descricaoAtividade, LocalDate dataInicio,
            LocalDate dataFinal, int cargaHorariaTotal) {
        this.setTipoAtividade(tipoAtividade);
        this.setDescricaoAtividade(descricaoAtividade);
        this.setDataInicio(dataInicio);
        this.setDataFinal(dataFinal);
        this.setCargaHorariaTotal(cargaHorariaTotal);
    }
    
    //Metodos Sets
    public void setTipoAtividade(Atividade tipoAtividade) {
        this.tipoAtividade = tipoAtividade;
    }

    public void setDescricaoAtividade(String descricaoAtividade) {
        this.descricaoAtividade = descricaoAtividade;
    }

    public void setDataInicio(LocalDate dataInicio) {
        this.dataInicio = dataInicio;
    }

    public void setDataFinal(LocalDate dataFinal) {
        this.dataFinal = dataFinal;
    }

    public void setCargaHorariaTotal(int cargaHorariaTotal) {
        this.cargaHorariaTotal = cargaHorariaTotal;
    }
    
    //Metodos de Gets
    public Long getId() {
        return id;
    }

    public Atividade getTipoAtividade() {
        return tipoAtividade;
    }

    public String getDescricaoAtividade() {
        return descricaoAtividade;
    }

    public LocalDate getDataInicio() {
        return dataInicio;
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
        hash = 79 * hash + Objects.hashCode(this.tipoAtividade);
        hash = 79 * hash + Objects.hashCode(this.descricaoAtividade);
        hash = 79 * hash + Objects.hashCode(this.dataInicio);
        hash = 79 * hash + Objects.hashCode(this.dataFinal);
        hash = 79 * hash + this.cargaHorariaTotal;
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
        final AtividadeExtra other = (AtividadeExtra) obj;
        if (!Objects.equals(this.tipoAtividade, other.tipoAtividade)) {
            return false;
        }
        if (!Objects.equals(this.descricaoAtividade, other.descricaoAtividade)) {
            return false;
        }
        if (!Objects.equals(this.dataInicio, other.dataInicio)) {
            return false;
        }
        if (!Objects.equals(this.dataFinal, other.dataFinal)) {
            return false;
        }
        if (this.cargaHorariaTotal != other.cargaHorariaTotal) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "AtividadeExtra{\n"
                + "id=" + id + ",\n "
                + "tipoAtividade=" + tipoAtividade + ",\n "
                + "descricaoAtividade=" + descricaoAtividade + ",\n "
                + "dataInicio=" + dataInicio + ",\n "
                + "dataFinal=" + dataFinal + ",\n "
                + "cargaHorariaTotal=" + cargaHorariaTotal + "\n "
                +'}';
    }
}