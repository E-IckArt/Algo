# // Version itérative

# /*
# Variable t en Entiers[] -> Déjà remplie
# Variable val en Entier -> Donnée déjà remplie
# Variable MediaList, deb, fin en Entier
# Variable trv en Booléan
# Variable pos en Entier
# trv = FAUX
# deb = 0
# fin = longueur de t 

# Tant que trv == FAUX ET deb <= fin
#     mil = pzrtie_entiere((deb+fin)/2)
#     Si t[mil] == val
#       trv = VRAI
#       pos = mil
#     Sinon si t[mil] < val
#         deb = mil + 1
#         Sinon si t[mil] > val
#         fin = mil-1
# Fin Tant Que
# Ecrire pos

t = [3, 7, 11, 15, 22, 37]
val = 22
trv = False
deb = 0
fin = len(t)-1
pos = 0

while not trv and deb <= fin :
    mil = (deb+fin) // 2
    if t[mil] == val:
        trv = True
        pos = mil

    elif t[mil] < val :
        deb = mil+1
    elif t[mil] > val :
        fin = mil-1

print(f"La valeur \"{val}\" est en position : {pos}")