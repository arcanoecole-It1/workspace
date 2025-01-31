def find_index(sequence : list[float] , target : int) -> int:
    index = 0
    for element in sequence :
        if element == target:
            print(index)
        index += 1
sequence= [1,12,14,16]
target = 14
find_index(sequence , target)
