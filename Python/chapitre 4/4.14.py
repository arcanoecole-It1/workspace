while True :
    user = input("Do you wish seeing this message again Y/N : ").upper()
    if user == str("Y"):
        print("This is not a loop.")
    print()
    if user == str("N"):
        break
print("Goodbye")
