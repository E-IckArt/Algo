# Exo 1

values = []

for i in range(0, 7):
    # append permet d'ajouter une valeur dans le tableau
    values.append(0)

print(values)


# imprimer chaque valeur du tableau
for i in range (0 , 7):
  print(values[i])


# Exo 2

notes = []
sum = 0


for i in range (0,9):
  notes.append(float(input("Entrez votre note : ")))
  print(notes)
  
  sum += notes[i]
  print(sum)

print(notes)

avg = sum/len(notes)
print(f"Moyenne :  {avg}")

print(f"Meilleure note : {max(notes)}")