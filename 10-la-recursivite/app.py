def countdown(nb):
    if(nb>=0) :
        print(nb)
        countdown(nb-1)
    else :
        print('Bonne année !!!!')
        return

countdown(10)

def factorielle(nb):
    if(nb> 1) :
        return nb*factorielle(nb-1)
    else :
        return 1

print(f"Le résultat de la factorielle de {5} est {factorielle(5)}")