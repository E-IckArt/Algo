# Ecrire un algorithme qui demande un nombre de départ et affiche ensuite les 10 nombres suivants.
# Ex: si l'utilisateur entre le nombre 17, le programme affichera les nombres de 18 à 27.


#Variable nb, i en Entier
#Lire nb
# Pour i = nb+1; faire si i<= nb+10; pas de 1
# Ecrire i

nb =  int(input("Entrez un nombre : "))

# valeur d'entrée
# valeur finale (exclue)
# le pas (n'est pas préciser obligatoirement, ssi i+= 1)
# ex: for i in range(nb+1, nb+11, 1):
for i in range(nb+1, nb+11):
    print(i)


# pour avoir nb + 10 comme dernière valeur retournée, il faut indiquer nb+11 comme valeur finale. 