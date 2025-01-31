number = float(input("Enter a value : "))
for i in range(1,11) :
    number *= 1.025
    print(f"Year+{i} : {number.__round__(3)}")
