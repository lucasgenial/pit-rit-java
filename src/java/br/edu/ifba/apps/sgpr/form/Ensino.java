package br.edu.ifba.apps.sgpr.form;

import br.edu.ifba.apps.sgpr.classes.Atividade;
import br.edu.ifba.apps.sgpr.classes.Disciplina;
import br.edu.ifba.apps.sgpr.classes.Curso;
import java.util.Objects;

/**
 * @author Teste
 */
public class Ensino {
    private Long id;
    private Atividade tipoAtividade;
    private String descricaoAtividade;
    private Curso curso;
    private Disciplina disciplina;
    private int cargaHoraria;
    
    //Construtor Completo
    public Ensino(Atividade tipoAtividade, String descricaoAtividade, Curso curso, Disciplina disciplina, int cargaHoraria) {
        this.setTipoAtividade(tipoAtividade);
        this.setDescricaoAtividade(descricaoAtividade);
        this.setCargaHoraria(cargaHoraria);
        this.setCurso(curso);
        this.setCargaHoraria(cargaHoraria);
    }
    
    //Métodos GETs
    public Long getId() {
        return id;
    }

    public Atividade getTipoAtividade() {
        return tipoAtividade;
    }

    public String getDescricaoAtividade() {
        return descricaoAtividade;
    }

    public Curso getCurso() {
        return curso;
    }

    public Disciplina getDisciplina() {
        return disciplina;
    }

    public int getCargaHoraria() {
        return cargaHoraria;
    }
    
    //Metodos SETs
    public void setId(Long id) {
        this.id = id;
    }

    public void setTipoAtividade(Atividade tipoAtividade) {
        this.tipoAtividade = tipoAtividade;
    }

    public void setDescricaoAtividade(String descricaoAtividade) {
        this.descricaoAtividade = descricaoAtividade;
    }

    public void setCurso(Curso curso) {
        this.curso = curso;
    }

    public void setDisciplina(Disciplina disciplina) {
        this.disciplina = disciplina;
    }

    public void setCargaHoraria(int cargaHoraria) {
        this.cargaHoraria = cargaHoraria;
    }

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 59 * hash + Objects.hashCode(this.id);
        hash = 59 * hash + Objects.hashCode(this.tipoAtividade);
        hash = 59 * hash + Objects.hashCode(this.curso);
        hash = 59 * hash + Objects.hashCode(this.disciplina);
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
        final Ensino other = (Ensino) obj;
        if (!Objects.equals(this.id, other.id)) {
            return false;
        }
        if (!Objects.equals(this.tipoAtividade, other.tipoAtividade)) {
            return false;
        }
        if (!Objects.equals(this.curso, other.curso)) {
            return false;
        }
        if (!Objects.equals(this.disciplina, other.disciplina)) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Ensino{\n"
                + "id=" + id + ",\n "
                + "tipoAtividade=" + tipoAtividade + ",\n "
                + "descricaoAtividade=" + descricaoAtividade + ",\n "
                + "curso=" + curso + ",\n "
                + "disciplina=" + disciplina + ",\n "
                + "cargaHoraria=" + cargaHoraria + '\n'
              +'}';
    }
}