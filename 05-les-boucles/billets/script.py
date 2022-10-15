somme = 0
billet50 = 0
billet20 = 0
billet10 = 0
billet5 = 0
    
somme = int(input("Entrez une somme : "))
print(f"Vous avez entré : {somme} €.")

while somme >= 5:
    if somme >= 50:
        somme -= 50
        billet50 += 1
    
    elif somme >= 20:
        somme -= 20
        billet20 += 1
    
    elif somme >= 10:
        somme -= 10
        billet10 += 1
    
    else:
        somme -= 5
        billet5 += 1

print(f"Somme restante en pièces : {somme} €.")
print(f"Billets de 50€ : {billet50}")
print(f"Billets de 20€ : {billet20}")
print(f"Billets de 10€ : {billet10}")
print(f"Billets de 5€ : {billet5}")