import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

    int somme;
    int billet50 = 0;
    int billet20 = 0;
    int billet10 = 0;
    int billet5 = 0;
    
    Scanner clavier = new Scanner(System.in);

    System.out.println("Entrez une somme : ");
    somme = clavier.nextInt();
    System.out.println("Vous avez entré : " + somme + " €.");

    while(somme >= 5) {
        if(somme >= 50) {
            somme -= 50;
            billet50 += 1;
        }
        else if(somme >= 20) {
            somme -= 20;
            billet20 += 1;
        }
        else if(somme >= 10) {
            somme -= 10;
            billet10 += 1;
        }
        else {
            somme -= 5;
            billet5 += 1;
        }
    }
    System.out.println("Somme restante en pièces = " + somme + "€.");
    System.out.println("Billets de 50€ : " + billet50);
    System.out.println("Billets de 20€ : " + billet20);
    System.out.println("Billets de 10€ : " + billet10);
    System.out.println("Billets de 5€ : " + billet5);

    clavier.close();
    }
}
