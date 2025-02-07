demo_list =[]
terme = False
while True :
    number =  int(input("Enter a number : "))
    if number == 0:
        break
    elif number % 2 == 0 :
        demo_list.append(number)
    else :
        demo_list.pop(-1)
print(demo_list)