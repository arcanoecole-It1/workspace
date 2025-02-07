num1 = int(input("Enter number x : "))
while True:
        try:
            num2 = int(input("Enter number y : "))
           # if num2 == 0:
                #raise ZeroDivisionError("Not possible")
            #else:
            result = num1 / num2
            print(result)
            break
        except ZeroDivisionError as e:
            print(e)