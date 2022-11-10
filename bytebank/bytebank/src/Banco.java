public class Banco {
    public static void main(String[] args) {
        Cliente levi = new Cliente();
        levi.nome = "Levi Leme";
        levi.cpf = "987.654.321-00";
        levi.profissao = "tester";

        Conta contaDoLevi = new Conta();
        contaDoLevi.deposita(100);

        contaDoLevi.titular = levi;

        System.out.println(contaDoLevi.titular.nome);
    }
}
