number = int(input("Enter a number : "))
print("Multiplication table for " , number ,':')
for i in range(1,11):
    square = number * i
    print (f'{i} * {number} = {square}')