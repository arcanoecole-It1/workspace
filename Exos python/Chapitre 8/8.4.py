def function_function():
    while True:
            try:
                number = int(input("Enter a number : "))
                return number
            except ValueError as e:
                 print(e)
                 
number =function_function()
print(number)