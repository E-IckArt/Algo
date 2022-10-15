total_achat = 0
paiement = 0
monnaie_a_rendre = 0

billet100 = 0
billet50 = 0
billet20 = 0
billet10 = 0
billet5 = 0
piece2 = 0
piece1 = 0
    
total_achat = int(input("Entrez le montant de votre panier : "))
print(f"Le montant total de vos achats est de : {total_achat} €.")

paiement = int(input("Entrez le montant de votre règlement : "))

#if paiement < total_achat:
while paiement < total_achat:
    print(f"Le montant de votre règlement n'est pas suffisant. Il reste {total_achat - paiement} € à régler.")
    paiement = paiement + int(input("Entrez le montant de votre règlement : "))
    
#else:
monnaie_a_rendre = paiement - total_achat
print(f"Vous avez réglé {paiement} €. Je dois vous rendre : {monnaie_a_rendre} €")

while monnaie_a_rendre > 0:

    if monnaie_a_rendre >= 100:
        monnaie_a_rendre -= 100
        billet100 += 1

    elif monnaie_a_rendre >= 50:
        monnaie_a_rendre -= 50
        billet50 += 1
    
    elif monnaie_a_rendre >= 20:
        monnaie_a_rendre -= 20
        billet20 += 1
    
    elif monnaie_a_rendre >= 10:
        monnaie_a_rendre -= 10
        billet10 += 1
    
    elif monnaie_a_rendre >= 5:
        monnaie_a_rendre -= 5
        billet5 += 1
    
    elif monnaie_a_rendre >= 2:
        monnaie_a_rendre -= 2
        piece2 += 1

    else:
        monnaie_a_rendre -= 1
        piece1 += 1

print("Voici votre monnaie :")

if billet100 > 0:
    print(f" - Billets de 100€ : {billet100}")
if billet50 > 0:
    print(f" - Billets de 50€ : {billet50}")
if billet20 > 0:
    print(f" - Billets de 20€ : {billet20}")
if billet10 > 0:
    print(f" - Billets de 10€ : {billet10}")
if billet5 > 0:
    print(f" - Billets de 5€ : {billet5}")
if piece2 > 0:
    print(f" - Pièces de 2€ : {piece2}")
if piece1 > 0:
    print(f" - Pièces de 1€ : {piece1}")

print(f"Somme restante à rendre : {monnaie_a_rendre} €.")
print("Merci pour votre visite ! A bientôt dans notre magasin !")

