package br.edu.ifba.apps.sgpr.atores;

//Importações
import br.edu.ifba.apps.sgpr.classes.Endereco;
import java.io.Serializable;
import java.time.LocalDate;

/**
 * @author Teste
 */
public abstract class Servidor implements Serializable{
    private Long cpf;
    private String nome;
    private String sexo;
    private LocalDate dataNascimento;
    private Endereco endereco;
    private String telefone;
    private String celular;
    private String email;
    private int siape;
    private int classe;
    private int nivel;
    private int regimeTrabalho;
    private String cargaHoraria;
    private int funcaoCargo;

    //Construtor Padrao
    public Servidor(Long cpf, String nome, String email) {
        this.setCpf(cpf);
        this.setNome(nome);
        this.setEmail(email);
    }

    //Construtor Completo
    public Servidor(Long cpf, String nome, String sexo, LocalDate dataNascimento, Endereco endereco, String telefone, String celular, String email, int siape, int classe, int nivel, int regimeTrabalho, String cargaHoraria, int funcaoCargo) {
        this.setCpf(cpf);
        this.setNome(nome);
        this.setEmail(email);        
        this.setSexo(sexo);
        this.setDataNascimento(dataNascimento);
        this.setEndereco(endereco);
        this.setTelefone(telefone);
        this.setCelular(celular);
        this.setSiape(siape);
        this.setClasse(classe);
        this.setNivel(nivel);
        this.setRegimeTrabalho(regimeTrabalho);
        this.setCargaHoraria(cargaHoraria);
        this.setFuncaoCargo(funcaoCargo);
    }
    
    //Criação dos SETS
    public void setCpf(Long cpf) {
        this.cpf = cpf;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public void setDataNascimento(LocalDate dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public void setCelular(String celular) {
        this.celular = celular;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setSiape(int siape) {
        this.siape = siape;
    }

    public void setClasse(int classe) {
        this.classe = classe;
    }

    public void setNivel(int nivel) {
        this.nivel = nivel;
    }

    public void setRegimeTrabalho(int regimeTrabalho) {
        this.regimeTrabalho = regimeTrabalho;
    }

    public void setCargaHoraria(String cargaHoraria) {
        this.cargaHoraria = cargaHoraria;
    }

    public void setFuncaoCargo(int funcaoCargo) {
        this.funcaoCargo = funcaoCargo;
    }

    // Criação dos GETS
    public Long getCpf() {
        return cpf;
    }

    public String getNome() {
        return nome;
    }

    public String getSexo() {
        return sexo;
    }

    public LocalDate getDataNascimento() {
        return dataNascimento;
    }

    public Endereco getEndereco() {
        return endereco;
    }

    public String getTelefone() {
        return telefone;
    }

    public String getCelular() {
        return celular;
    }

    public String getEmail() {
        return email;
    }

    public int getSiape() {
        return siape;
    }

    public int getClasse() {
        return classe;
    }

    public int getNivel() {
        return nivel;
    }

    public int getRegimeTrabalho() {
        return regimeTrabalho;
    }

    public String getCargaHoraria() {
        return cargaHoraria;
    }

    public int getFuncaoCargo() {
        return funcaoCargo;
    }
    
    //HashCode
    @Override
    public int hashCode() {
        int hash = 7;
        hash = 11 * hash + (int) (this.cpf ^ (this.cpf >>> 32));
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
        final Servidor other = (Servidor) obj;
        if (this.getCpf() != other.getCpf()) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Servidor{\n"
                + "CPF=" + this.getCpf() + ",\n "
                + "Nome=" + this.getNome() + ",\n "
                + "Sexo=" + this.getSexo() + ",\n "
                + "DataNascimento=" + this.getDataNascimento() + ",\n "
                + "Endereco=" + this.getEndereco() + ",\n "
                + "Telefone=" + this.getTelefone() + ",\n "
                + "Celular=" + this.getCelular() + ",\n "
                + "Email=" + this.getEmail() + ",\n "
                + "SIAPE=" + this.getSiape() + ",\n "
                + "Classe=" + this.getClass() + ",\n "
                + "Nível=" + this.getNivel() + ",\n "
                + "RegimeTrabalho=" + this.getRegimeTrabalho() + ",\n "
                + "CargaHoraria=" + this.getCargaHoraria() + ",\n "
                + "FuncaoCargo=" + this.getFuncaoCargo() + '\n'
            +'}';
    }
}
