famous_citation = "I think therefore, I am."
compteur = {}
for char in famous_citation :
    if char in compteur :
        compteur[char] += 1
    else :
        compteur[char] = 1

for char , count in compteur.items():
    print(f'There are {count} "{char}" in the text')