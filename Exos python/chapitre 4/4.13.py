nbLine = 10
nbCol = 10
for line in range(1,nbLine + 1):
    for column in range(1 , nbCol + 1):
        cell = line  * column
        nbDigit = len(str(cell))
        if nbDigit < 2 :
            print(str(0) + str(cell) , end= " ")
        else :
            print(str(cell) , end= " ")
    print()