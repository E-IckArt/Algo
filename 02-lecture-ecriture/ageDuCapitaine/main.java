package ageDuCapitaine;
import java.util.Scanner;

public class main {
    public static void main(String[] args) {
    
    Scanner userInput = new Scanner(System.in);
    
    //Affiche "Entrez l'âge du capitaine :" dans la console
    System.out.println("Entrez l'âge du capitaine : ");
    //Lit l'entier écrit par l'utilisateur et l'affecte à la variable ageDuCapitaine du programme
    int ageDuCapitaine = userInput.nextInt();
    //Affiche le nombre saisit par l'utilisateur
    System.out.println("Le capitaine a " + ageDuCapitaine + " ans.");

    if (ageDuCapitaine <= 40) {
        System.out.println("Il a encore une longue carrière devant lui.");
    }
    if (ageDuCapitaine >= 60) { 
        System.out.println("Bientôt le dernier retour au port. Alors matelot, prêt à prendre du galon ? ");
    }

    userInput.close();

    }
}
