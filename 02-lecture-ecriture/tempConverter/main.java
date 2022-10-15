package tempConverter;
import java.util.Scanner;
class Main {
  public static void main(String[] args) {
    ///Demander une température en celsius à l'utilisateur

Scanner clavier = new Scanner(System.in);
double inputCelsius;
double outputFahrenheit;

//Ecrire "Entrez une température en °C"
//stockage de l'entrée utilisateur dans la variable inputCelsius

System.out.println("Entrez une température en °C :");
inputCelsius = clavier.nextDouble();
System.out.println("Vous avez entré : " + inputCelsius + "°C");

//Lire inputCelsius
outputFahrenheit = ((inputCelsius * 9/5) + 32);
//Afficher la conversion en outputFahrenheit dans la console
System.out.println(inputCelsius + "°C font " + outputFahrenheit + " °F.");

clavier.close();

//Autoboxing : Conversion du type primitif double en Objet Wrapper Double
Double inCel = inputCelsius;
//Affichage du nom complet qualifié de la classe, y compris le nom du package
System.out.println(" ");
System.out.println("Le nom complet de cet Objet est : " + inCel.getClass());
//Affichage du nom du type d'objet
System.out.println(" ");
System.out.println("Le type de cet Objet est : " + inCel.getClass().getSimpleName());
  }
}