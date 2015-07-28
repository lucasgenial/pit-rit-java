package br.edu.ifba.apps.sgpr.form;

import br.edu.ifba.apps.sgpr.classes.Atividade;
import br.edu.ifba.apps.sgpr.atores.Professor;
import java.time.LocalDate;
import java.time.Year;
import java.util.List;

/**
 * @author Teste
 */
public class Pit {
    private Long id;
    private LocalDate dataCriacao;
    private LocalDate dataUltimaAlteracao;
    
    //dados de referencia
    private Professor professor;
    private String semestre;
    private Year anoReferencia;
    
    //Dados
    private List<Ensino> rel_ensinos;
    private List<Pesquisa> rel_pesquisa;
    private List<Extensao> rel_extensao;
    private List<FuncaoAdministrativa> rel_funcaoAdministrativa;
    private List<Treinamento> rel_treinamento;
    
    //ref outras atividades campo 7
    private List<AtividadeExtra> rel_atividadeExtra;
    
    //ref resumo da Carga Horaria campo 8
}
