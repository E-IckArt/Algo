import java.util.Scanner;

public class Main {
  public static void main(String[] args) {

    int total_achat = 0;
    int paiement = 0;
    int monnaie_a_rendre = 0;

    int billet100 = 0;
    int billet50 = 0;
    int billet20 = 0;
    int billet10 = 0;
    int billet5 = 0;
    int piece2 = 0;
    int piece1 = 0;
    
    Scanner regler = new Scanner(System.in);

    System.out.println("Entrez le montant de votre panier : ");
    total_achat = regler.nextInt();
    System.out.println("Le montant total de vos achats est de : " + total_achat +"€.");

    System.out.println("Entrez le montant de votre règlement : ");
    paiement = regler.nextInt();

    while (paiement < total_achat) {
      System.out.println("Le montant de votre règlement n'est pas suffisant. Il reste " + (total_achat - paiement) + " € à régler.");
      System.out.println("Veuillez compléter votre règlement : ");
      paiement = paiement + regler.nextInt();
    }

    monnaie_a_rendre = paiement - total_achat;
    System.out.println("Vous avez réglé " + paiement + " €.");

    if(monnaie_a_rendre != 0) {
      System.out.println("Je dois vous rendre : " + monnaie_a_rendre + " €.");

    while (monnaie_a_rendre > 0) {

      if (monnaie_a_rendre >= 100) {
        monnaie_a_rendre -= 100;
        billet100 += 1;
      }

      else if (monnaie_a_rendre >= 50) {
        monnaie_a_rendre -= 50;
        billet50 += 1;
      }
      else if (monnaie_a_rendre >= 20) {
        monnaie_a_rendre -= 20;
        billet20 += 1;
      }
  
      else if (monnaie_a_rendre >= 10) {
        monnaie_a_rendre -= 10;
        billet10 += 1;
      }

      else if (monnaie_a_rendre >= 5) {
        monnaie_a_rendre -= 5;
        billet5 += 1;
      }
  
      else if (monnaie_a_rendre >= 2) {
        monnaie_a_rendre -= 2;
        piece2 += 1;
      }

      else {
        monnaie_a_rendre -= 1;
        piece1 += 1;
      }
    }

    System.out.println("Voici votre monnaie :");

    if(billet100 > 0) {
      System.out.println(" - Billets de 100€ : " + billet100);
    }
    if(billet50 > 0) {
      System.out.println(" - Billets de 50€ : " + billet50);
    }
    if(billet20 > 0) {
      System.out.println(" - Billets de 20€ : " + billet20);
    }
    if(billet10 > 0) {
      System.out.println(" - Billets de 10€ : " + billet10);
    }
    if(billet5 > 0) {
      System.out.println(" - Billets de 5€ : " + billet5);
    }
    if(piece2 > 0) {
      System.out.println(" - Pièces de 2€ : " + piece2);
    }
    if(piece1 > 0) {
      System.out.println(" - Pièces de 1€ : " + piece1);
    }
    }

    else {
      System.out.println("Vous avez l'appoint ! Fantastique !");
    }

    System.out.println("Somme restante à rendre : " + monnaie_a_rendre + " €.");
    System.out.println("Merci pour votre visite ! A bientôt dans notre magasin !");

    regler.close();
  }
}
