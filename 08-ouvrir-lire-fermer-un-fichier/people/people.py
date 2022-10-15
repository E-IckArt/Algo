f = open("people/people.csv", "r", encoding="utf-8")
people = []

for line in f:
    print(line)
    explodedLine = line.rstrip().split(';')
    # .rstrip() enlève tous les caractères de début et de fin, ex: \n
    people.append(explodedLine)

print(people)

f.close()