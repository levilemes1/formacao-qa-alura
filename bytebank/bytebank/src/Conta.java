public class Conta {
    private Cliente titular;
    private int agencia;
    private int numero;
    private double saldo;

    public void deposita(double valor) {
        this.saldo += valor;
    }

    public boolean saca(double valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            return true;
        } else {
            return false;
        }
    }

    public boolean transfere(double valor, Conta contaDestino) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            contaDestino.deposita(valor);
            return true;
        }
        return false;
    }

    public double getSaldo() {
        return saldo;
    }

    public double getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public void setAgencia(int agencia) {
        this.agencia = agencia;
    }
}
