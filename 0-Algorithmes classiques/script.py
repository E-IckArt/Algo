# Chercher la position d'une valeur dans une liste non-triée

temperatures = [12, 5, 29, -3]
val = 5; #La valeur à trouver

for i in range(len(temperatures)):
    
  if val == temperatures[i]:
    print(f'La valeur se trouve à l\'index: {i}')


# Chercher le maximum d'une liste de températures

temp = [12, 5, 29, -3]
max = temp[0]
for i in range(1, len(temp)):
    if max < temp[i]:
        max = temp[i]

print(max) #29


"""Python : Recherche du maximum dans une liste triée. """

sorted_temperatures = [-3, 5, 12, 29]
max = sorted_temperatures[len(sorted_temperatures)-1]
print(f'La temperature maximale de la liste est de : {max}')


"""Python : Recherche naïve dans une liste triée. """

sorted_temperatures = [-3, 5, 12, 50, 50, 78, 94, 113, 129]
val = 50
i = 0
while (i < len(sorted_temperatures) and sorted_temperatures[i] <= val):
    if sorted_temperatures[i] == val:
        print(i)
    i = i + 1
print("Fin")


"""Python : Dichotomie. """
sorted_temperatures = [-3, 5, 12, 50, 78, 94, 113, 129]
val = 12

a = 0
b = len(sorted_temperatures) - 1
while a <= b:
    m = (a + b) // 2
    if sorted_temperatures[m] == val:
    # on a trouvé v
        print(m)
        break
    elif sorted_temperatures[m] < val:
        a = m + 1
    else:
        b = m - 1


"""Python : Produit cartésien pour obtenir les menus possibles. """
vegetables = ["Frites", "Riz", "Coquillettes"]
sauces = ["Pesto", "Ketchup"]

for i in range(len(vegetables)):
    for j in range(len(sauces)):
        print(vegetables[i],sauces[j])


"""Python : Suite de Fibonacci. """
n = int(input("Entrer un entier supérieur à 1:")) # Par exemple, 4

fibo = [0]*(n)
fibo[0] = 0
fibo[1] = 1

for i in range(2,n):
    fibo[i] = fibo[i-1] + fibo[i-2]

print(fibo)


"""Python : Tri à bulles d'une liste d'âges. """
ages = [17, 1, 28, 5]

for i in range(len(ages)-1, 0, -1):
    for j in range(0, i):
        if ages[j+1] < ages[j]:
            # Echanger les deux valeurs
            temp = ages[j+1]
            ages[j+1] = ages[j]
            ages[j] = temp

print(ages)
