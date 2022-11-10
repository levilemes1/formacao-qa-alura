public class CriaConta {

    public static void main(String[] args) {
        Conta primeiraConta = new Conta();
        primeiraConta.deposita(200);
        System.out.println(primeiraConta.getSaldo());

        primeiraConta.deposita(100);
        System.out.println(primeiraConta.getSaldo());

        Conta segundaConta = new Conta();
        segundaConta.deposita(50);

        System.out.println("primeira conta tem " + primeiraConta.getSaldo());
        System.out.println("segunda conta tem " + segundaConta.getSaldo());

        Conta contaDoLevi = new Conta();
        contaDoLevi.deposita(100);
        System.out.println(contaDoLevi.getSaldo());

        contaDoLevi.saca(10);
        System.out.println(contaDoLevi.getSaldo());

        Conta contaDaNaira = new Conta();
        contaDaNaira.transfere(100, contaDoLevi);

        System.out.println(contaDaNaira.getSaldo());
        System.out.println(contaDoLevi.getSaldo());

        contaDaNaira.deposita(10);
        if (contaDaNaira.transfere(100, contaDoLevi)) {
            System.out.println("deu certo");
        } else {
            System.out.println("nao deu certo");
        }

        System.out.println(contaDaNaira.getSaldo());
        System.out.println(contaDoLevi.getSaldo());
    }
}