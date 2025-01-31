terminal = 0
while True :
    try:
        number = int(input("Enter a number : "))
        terminal += number
        choix_utilisateur = input("Do you want to continue Y/N : ").upper()
        if choix_utilisateur == "Y":
            continue
        elif choix_utilisateur == "N":
            break
        else :
            print("Enter either 'Y' or 'N'")
    except ValueError as e:
        print(f"{e}\nEnter a valide input" )
print(f"Total sum : {terminal}")