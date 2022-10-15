f = open("todo.txt", "a",encoding="utf-8") # Le "w" crée le fichier s'il n'existe pas


f.write('Préparer l\'anniversaire de Charly \n')

f.write('Faire le ménage \n')
f.write('Faire les courses \n')

f.close()