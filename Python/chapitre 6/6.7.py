def function_list(sequence : list) -> list: 
    list_1 =[]
    for i in range(len(sequence)-1,-1,-1):
        list_1.append(sequence[i])
        print(list_1)
sequence = [1,2,3,4,5]
function_list(sequence)