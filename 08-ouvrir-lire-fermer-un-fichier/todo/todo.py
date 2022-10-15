# encoding="utf-8" permet d'écrire les caractère accentués correctement.

f = open("todo/todo.txt", "r", encoding="utf-8")

for line in f:
    print(line)

f.close()