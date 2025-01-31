number = int(input("Enter a number : "))
for i in range(number):
    etoile = str("*") * (i * 2 + 1)
    print(' ' * (number - (i) -1) + etoile)
